import Carousel from 'react-native-snap-carousel';
// import * as React from 'react';
// import { ScrollView, View, Text } from 'react-native';
// import { styles } from './styles';
// import { AntDesign } from '@expo/vector-icons';
// import { ComponentCard, ComponentCardProps } from './ComponentCard';
// import { ComponentScroll } from './ComponentScroll';

// export class MyCarousel extends React.Component {
//     _renderItem = ({item, index}) => {
//         return (
//             <ComponentCard key={item.id} id={item.id} subtitles={item.subtitles} title={item.title} /> 
//         );
//     }

//     render () {
//         return (
//             <CarouselZ
//               data={this.state.entries}
//               renderItem={this._renderItem}
//               sliderWidth={sliderWidth}
//               itemWidth={itemWidth}
//             />
//         );
//     }
// }

import * as React from 'react';
import { ScrollView, View, Text, Dimensions, LayoutChangeEvent } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { ComponentCard, ComponentCardProps } from './ComponentCard';
import { ComponentScroll } from './ComponentScroll';
import { CarouselSpacer } from './CarouselSpacer';
import { useNavigation } from '@react-navigation/native';

function closest(num: number, arr: number[]) {
    var curr = arr[0],
        diff = Math.abs(num - curr),
        index = 0;

    for (var val = 0; val < arr.length; val++) {
        let newdiff = Math.abs(num - arr[val]);
        if (newdiff < diff) {
            diff = newdiff;
            curr = arr[val];
            index = val;
        }
    }
    return index;
}

export interface ComponentCarouselProps {
    components?: ComponentCardProps[];
    type?: 'room' | 'box' | "Item"
    spacing?: number;
    mode?: "Edit" | "Select",
    onSelect?: (index: number) => any,
    defaultValue?: string
}
export function ComponentCarousel({
    onSelect,
    components = [],
    spacing = 10,
    type = 'room',
    mode = "Edit",
    defaultValue = undefined,
}: ComponentCarouselProps){
    const scrollRef = React.useRef<ScrollView | null>();
    const cardWidth = Dimensions.get('window').width * 0.765 + 40;
    // const [ offsets, setOffsets ] = React.useState<{[key: string]: number}>({0: 0});
    const [ offsets, setOffsets ] = React.useState<number[]>([]);
    const [ scroll, setScroll ] = React.useState(0);
    const [ currentElement, setCurrentElement ] = React.useState(components.findIndex(x => x.id === defaultValue));
    const [ carouselWidth, setCarouselWidth ] = React.useState(0);

    const navigation = useNavigation();
    // let offsets = [];

    const buildOnLayout = (index: number) => {
        return (event: LayoutChangeEvent) => {
            // if(index < components.length){
            //     const {x, y, height, width} = event.nativeEvent.layout;
            //     const keys = Object.keys(offsets);
            //     setOffsets({...offsets, [index + 1]: width + offsets[keys[keys.length - 1]]});
            //     console.log(offsets);
            // }
        }
    }

    const scrollToElement = () => {
        const scrollToIndex = currentElement >= components.length - 1 ? 0 : currentElement + 1;
        console.log(scrollToIndex);
        const offset = offsets[scrollToIndex];
        scrollRef.current.scrollTo({x: offset});
        setCurrentElement(scrollToIndex);
        onSelect?.(scrollToIndex);
    }

    const calculateIndex = () => {
        setCurrentElement(closest(scroll, Object.values(offsets)));
        onSelect?.(currentElement);
    }

    const updateOffsets = (width: number) => {
        let off = [];
        for(let i = 0; i < components.length; i++){
            off = [...off, i * (width + spacing)];
        }
        setOffsets(off);
    }

    const onCarouselLayout = (event: LayoutChangeEvent) => {
        setCarouselWidth(event.nativeEvent.layout.width);
    }

    React.useEffect(() => {
        let off = [];
        for(let i = 0; i < components.length; i++){
            off = [...off, i * (carouselWidth + spacing)];
        }
        setOffsets(off);
    }, [components, carouselWidth]);

    // React.useEffect(() => {
    //     scrollToElement();
    // }, [defaultValue]);

    // const cardRefs = React.useRef<View[]>([]);
    return <><View style={styles.carousel} onLayout={onCarouselLayout}>
        <ScrollView ref={scrollRef} horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled snapToOffsets={Object.values(offsets)} decelerationRate={10} onScroll={(ev) => setScroll(ev.nativeEvent.contentOffset.x)} onMomentumScrollEnd={calculateIndex}>
            {components.map((v, i) => <View onLayout={buildOnLayout(i)} key={v.id} style={styles.carouselElement}><ComponentCard {...v} width={carouselWidth} onPress={() => mode === 'Edit' ? navigation.navigate('Edit', {id: v.id, type}) : null} key={v.id}/>{i < components.length - 1 ? <CarouselSpacer width={spacing} /> : null}</View>)}
        </ScrollView>
        {components.length > 1 ? <ComponentScroll onPress={scrollToElement}/> : null}
        
    </View>
    </>
}