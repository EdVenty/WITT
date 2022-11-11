import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';

export interface ComponentCardProps {
    id: string;
    title: string;
    subtitles: string[];
    thirdtitle?: string;
    icon?: any // pls help to annotate
    // icon?: "link" | "form" | "picture" | "table" | "filter" | "stepforward" | "stepbackward" | "forward" | "banckward" | "caretright" | "caretleft" | "caretdown" | "caretup" | "rightcircle" | "leftcircle" | "upcircle" | "downcircle" | "rightcircleo" | "leftcircleo" | "upcircleo" | "downcircleo" | "verticleleft" | "verticleright" | "back" | "retweet" | "shrink" | "arrowsalt" | "doubleright" | "doubleleft" | "arrowdown" | "arrowup" | "arrowright" | "arrowleft" | "down" | "up" | "right" | "left" | "minussquareo" | "minuscircle" | "minuscircleo" | "minus" | "pluscircleo" | "pluscircle" | "plus" | "infocirlce" | "infocirlceo" | "info" | "exclamation" | "exclamationcircle" | "exclamationcircleo" | "closecircle" | "closecircleo" | "checkcircle" | "checkcircleo" | "check" | "close" | "customerservice" | "creditcard" | "codesquareo" | "book" | "barschart" | "bars" | "question" | "questioncircle" | "questioncircleo" | "pause" | "pausecircle" | "pausecircleo" | "clockcircle" | "clockcircleo" | "swap" | "swapleft" | "swapright" | "plussquareo" | "frown" | "menufold" | "mail" | "areachart" | "linechart" | "home" | "laptop" | "star" | "staro" | "meho" | "meh" | "shoppingcart" | "save" | "user" | "videocamera" | "totop" | "team" | "sharealt" | "setting" | "phone" | "paperclip" | "notification" | "menuunfold" | "inbox" | "lock" | "qrcode" | "tags" | "tagso" | "cloudo" | "cloud" | "cloudupload" | "clouddownload" | "clouddownloado" | "clouduploado" | "enviroment" | "enviromento" | "eye" | "eyeo" | "camera" | "camerao" | "windows" | "export2" | "export" | "circledowno" | "circledown" | "hdd" | "ie" | "delete" | "enter" | "pushpino" | "pushpin" | "heart" | "hearto" | "smile-circle" | "smileo" | "frowno" | "calculator" | "chrome" | "github" | "iconfontdesktop" | "caretcircleoup" | "upload" | "download" | "piechart" | "lock1" | "unlock" | "windowso" | "dotchart" | "barchart" | "codesquare" | "plussquare" | "minussquare" | "closesquare" | "closesquareo" | "checksquare" | "checksquareo" | "fastbackward" | "fastforward" | "upsquare" | "downsquare" | "leftsquare" | "rightsquare" | "rightsquareo" | "leftsquareo" | "down-square-o" | "up-square-o" | "play" | "playcircleo" | "tag" | "tago" | "addfile" | "folder1" | "file1" | "switcher" | "addfolder" | "folderopen" | "search1" | "ellipsis1" | "calendar" | "filetext1" | "copy1" | "jpgfile1" | "pdffile1" | "exclefile1" | "pptfile1" | "unknowfile1" | "wordfile1" | "dingding" | "dingding-o" | "mobile1" | "tablet1" | "bells" | "disconnect" | "database" | "barcode" | "hourglass" | "key" | "flag" | "layout" | "printer" | "USB" | "skin" | "tool" | "car" | "addusergroup" | "carryout" | "deleteuser" | "deleteusergroup" | "man" | "isv" | "gift" | "idcard" | "medicinebox" | "redenvelopes" | "rest" | "Safety" | "wallet" | "woman" | "adduser" | "bank" | "Trophy" | "loading1" | "loading2" | "like2" | "dislike2" | "like1" | "dislike1" | "bulb1" | "rocket1" | "select1" | "apple1" | "apple-o" | "android1" | "android" | "aliwangwang-o1" | "aliwangwang" | "pay-circle1" | "pay-circle-o1" | "poweroff" | "trademark" | "find" | "copyright" | "sound" | "earth" | "wifi" | "sync" | "login" | "logout" | "reload1" | "message1" | "shake" | "API" | "appstore-o" | "appstore1" | "scan1" | "exception1" | "contacts" | "solution1" | "fork" | "edit" | "warning" | "profile" | "dashboard" | "indent-left" | "indent-right" | "menu-unfold" | "menu-fold" | "antdesign" | "alipay-square" | "codepen-circle" | "google" | "amazon" | "codepen" | "facebook-square" | "dropbox" | "googleplus" | "linkedin-square" | "medium-monogram" | "gitlab" | "medium-wordmark" | "QQ" | "skype" | "taobao-square" | "alipay-circle" | "youtube" | "wechat" | "twitter" | "weibo" | "HTML" | "taobao-circle" | "weibo-circle" | "weibo-square" | "CodeSandbox" | "aliyun" | "zhihu" | "behance" | "dribbble" | "dribbble-square" | "behance-square" | "file-markdown" | "instagram" | "yuque" | "slack" | "slack-square"
}

export function ComponentCard({
    title, 
    subtitles = [],
    thirdtitle,
    icon = <AntDesign name={'questioncircle'} size={70} color="white" style={styles.cardIcon}/>
}: ComponentCardProps){
    return <View style={styles.card}>
        <View style={styles.cardTexts}>
            <Text style={styles.cardTitle}>{title}</Text>
            <View style={styles.cardSubContainer}>
                <View>
                    {subtitles.map(i => <Text key={i} style={styles.cardSubtitle}>{i}</Text>)}
                </View>
                {thirdtitle ? <Text style={styles.cardSubtitle}>{thirdtitle}</Text> : null}
            </View>
        </View>
        {icon}
    </View>
}