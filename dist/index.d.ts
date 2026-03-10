import React from 'react';
import { StyleProp } from 'react-native';
type Value = {
    value: string;
    furi?: string;
};
interface FuriProps {
    value: Value[];
    style?: StyleProp<any>;
    textStyle?: StyleProp<any>;
    valueStyle?: StyleProp<any>;
    furiStyle?: StyleProp<any>;
    size?: number;
    showFuri?: boolean;
    mode?: string;
}
interface FuriState {
}
export default class Furi extends React.PureComponent<FuriProps, FuriState> {
    render(): React.JSX.Element;
}
export {};
