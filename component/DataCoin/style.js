import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewCard: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
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
    txtBig: { fontSize: 12, color: '#505051' }
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
        paddingTop: 10,
        paddingBottom: 10,
        paddingEnd: 10,
        paddingStart: 10
    },
    footerRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10,
        paddingEnd: 10,
        paddingStart: 10,
        paddingTop: 10
    },
    baseVolumeCenter: {
        alignItems: 'center',
        flex: 1,
    },
    high24: {
        alignItems: 'center',
        flex: 1,
    },
    low24: {
        alignItems: 'center',
        flex: 1,
    },
    lastPrice: {
        flex: 1,
        alignItems: 'flex-end',
    },
    coin: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row',
        fontSize: 16,
    },
    coinIcon: {
        width: 40,
        height: 40,
        marginEnd: 8,
    },
    textName: {
        fontSize: 15,
        justifyContent: 'center',
    },
    txtGreen: {
        color: 'green'
    },
    txtRed: {
        color: 'red'
    }


});

export default styles;