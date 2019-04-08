import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 18,

    },
    viewCard: {
        paddingStart: 24,
        paddingEnd: 24,
        paddingTop: 6,
        paddingBottom: 24
    },
    cardItemCornor: {
        paddingStart: 3,
        paddingEnd: 3,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center'
    },
    txtSmall: {
        fontSize: 10,
        color: '#505051'
    },
    txtBig: { fontSize: 16, color: '#505051' }
    ,
    txtLeft: {
        textAlign: 'left'
    },
    txtRight: {
        textAlign: 'right'
    },
    txtCenter: {
        flexDirection: "row", justifyContent: "center"
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        paddingEnd: 15,
        paddingStart: 15
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
        paddingEnd: 15,
        paddingStart: 15
    },
    baseVolumeCenter: {
        alignItems: 'center',
    },
    high24: {
        marginEnd: 20,
        alignItems: 'center',
    },
    low24: {
        marginStart: 20,
        alignItems: 'center',
    },
    lastPrice: {
        flex: 1,
        alignItems: 'flex-end',
    },
    coin: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        fontSize: 16
    },
    coinIcon: {
        width: 40,
        height: 40,
        marginEnd: 8
    },
    textName: {
        marginTop: 8
    },
    txtGreen: {
        color: 'green'
    },
    txtRed: {
        color: 'red'
    }


});

export default styles;