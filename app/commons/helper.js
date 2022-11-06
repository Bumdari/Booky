import { Dimensions } from 'react-native';
import scale from '../assets/scale';

const { width } = Dimensions.get('screen');

export default class Helper {

    static imageResize(padding, imageWidth, imageHeight) {
        return ((width - scale(padding * 2)) * imageHeight) / imageWidth;
    }
}

// Мөнгөн дүнг мянгтын орноор хэлбэржүүлнэ.
export const MoneyFormater = val => {
    try {
        if (val != null) {
            val = parseFloat(val).toFixed(0)
            val = String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
        return val;
    } catch (e) {
        return ' ';
    }
};
