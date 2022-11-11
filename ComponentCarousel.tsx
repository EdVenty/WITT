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
    components: ComponentCardProps[];
    spacing?: number;
}
export function ComponentCarousel({
    components,
    spacing = 10
}: ComponentCarouselProps){
    const scrollRef = React.useRef<ScrollView | null>();
    const cardWidth = Dimensions.get('window').width * 0.765 + 40;
    const [ offsets, setOffsets ] = React.useState<{[key: string]: number}>({0: 0});
    const [ scroll, setScroll ] = React.useState(0);
    const [ currentElement, setCurrentElement ] = React.useState(0);

    const buildOnLayout = (index: number) => {
        return (event: LayoutChangeEvent) => {
            if(index < components.length){
                const {x, y, height, width} = event.nativeEvent.layout;
                const keys = Object.keys(offsets);
                setOffsets({...offsets, [index + 1]: width + offsets[keys[keys.length - 1]]})
            }
        }
    }

    const scrollToElement = () => {
        const scrollToIndex = currentElement >= components.length - 1 ? 0 : currentElement + 1;
        const offset = offsets[scrollToIndex];
        scrollRef.current.scrollTo({x: offset});
        setCurrentElement(scrollToIndex);
    }

    const calculateIndex = () => {
        setCurrentElement(closest(scroll, Object.values(offsets)));
    }

    // const cardRefs = React.useRef<View[]>([]);
    return <><View style={styles.carousel}>
        <ScrollView ref={scrollRef} horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled snapToOffsets={Object.values(offsets)} decelerationRate={10} onScroll={(ev) => setScroll(ev.nativeEvent.contentOffset.x)} onMomentumScrollEnd={calculateIndex}>
            {components.map((v, i) => <View onLayout={buildOnLayout(i)} key={v.id} style={styles.carouselElement}><ComponentCard {...v} key={v.id}/>{i < components.length - 1 ? <CarouselSpacer width={spacing} /> : null}</View>)}
        </ScrollView>
        {components.length > 1 ? <ComponentScroll onPress={scrollToElement}/> : null}
        
    </View>
    {/* <Text>{scroll}</Text>
    <Text>{currentElement}</Text> */}
    </>
}