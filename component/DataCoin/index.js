import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from "react-redux";
import { Content, List, Text, Card } from 'native-base';
import styles from './style'
import { images, names } from '../../utils/coinIcon'

class DataCoin extends Component {
    render() {
        const coinArr = this.props.coins
        // console.log(coinArr);
        return (
            <Content style={styles.container}>
                <List
                    dataArray={coinArr}
                    renderRow={(item, sectionID, rowID, highlightRow) => (
                        <View style={styles.viewCard}>
                            <Card style={styles.cardItemCornor}>
                                <View style={styles.headerRow}>
                                    <View style={[styles.coin]}>
                                        <Image
                                            style={styles.coinIcon}
                                            source={{ uri: images[rowID] }}
                                        />
                                        <Text style={styles.textName}>
                                            {names[rowID]}
                                        </Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                    </View>
                                    <View style={[styles.lastPrice, styles.txtRight]}>
                                        <Text style={[styles.txtBig]}>
                                            {item.last}
                                        </Text>
                                        <Text style={[styles.txtSmall, item.percentChange > 0 ? styles.txtGreen : styles.txtRed]}>
                                            ({item.percentChange})
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.footerRow}>
                                    <View style={styles.high24}>
                                        <Text style={[styles.txtBig]}>
                                            {item.high24hr}
                                        </Text>
                                        <Text style={[styles.txtSmall, styles.txtCenter]}>
                                            24H HIGH
                                        </Text>
                                    </View>
                                    <View style={styles.baseVolumeCenter}>
                                        <Text style={[styles.txtBig]}>
                                            {item.baseVolume}
                                        </Text>
                                        <Text style={[styles.txtSmall]}>
                                            Volume
                                        </Text>
                                    </View>
                                    <View style={styles.low24}>
                                        <Text style={[styles.txtBig]}>
                                            {item.low24hr}
                                        </Text>
                                        <Text style={[styles.txtSmall]}>
                                            24H LOW
                                        </Text>
                                    </View>
                                </View>
                            </Card>
                        </View>
                    )}>
                </List>
            </Content >
        )
    }
}

const mapStateToProps = state => ({
    coins: state.coins
});

export default
    connect(
        mapStateToProps
    )(DataCoin);

