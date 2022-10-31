import { Dimensions, StyleSheet, Platform } from "react-native";
import scale from "./scale";
// import MainStyles from "../assets/"

const { width, height } = Dimensions.get("window");
const Mulish = "Mulish";

export default styles = {
    body: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    h1: {
        fontSize: scale(32),
        lineHeight: scale(36),
        fontWeight: "700",
        fontFamily: 'Mulish-Regular',
        color: '#ffffff'
    },
    h2: {
        fontSize: scale(26),
        lineHeight: scale(30),
        // fontWeight: "700",
        fontFamily: 'Mulish-Bold',
        color: '#ffffff'
    },
    h3: {
        fontSize: scale(22),
        lineHeight: scale(26),
        // fontWeight: "700",
        fontFamily: 'Mulish-Bold'
    },
    font18: {
        fontSize: scale(18),
        lineHeight: scale(22),
        fontWeight: "700",
        fontFamily: 'Mulish-Regular',
        color: '#4e0103',
    },
    font18_gray: {
        fontSize: scale(18),
        lineHeight: scale(22),
        fontWeight: "600",
        fontFamily: 'Mulish-Bold',
        color: '#1c1c24',
    },
    font16: {
        fontSize: scale(16),
        lineHeight: scale(20),
        fontWeight: "700",
        fontFamily: 'Mulish-Regular',
        color: '#4e0103'
    },
    font14: {
        fontSize: scale(14),
        lineHeight: scale(18),
        fontFamily: 'Mulish-Regular',
        color: '#90939e'
    },
    font14_bold: {
        fontSize: scale(14),
        lineHeight: scale(18),
        fontWeight: '500',
        fontFamily: 'Mulish-Bold',
        color: '#90939e'
    },
}

