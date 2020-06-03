import ProfileCard from "../../../components/profile-card";
import {Button, Card, Divider, Text} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import React from "react";
import StarRatingComponent from "./starRating"
import Icon from "react-native-vector-icons/EvilIcons";

const Item = ({item}) => {
    const onSelected = () => {
        console.log('item selected')
    }
    return(
        <Card style={styles.card}>
            <ProfileCard name={item.user.profile.name} avatar={item.user.profile.avatar} onSelected={onSelected} subtitle={`${item.user.profile.city}, ${item.user.profile.county}`} />
            <Card.Content>
                <Divider />
                <View style={styles.ratingContainer}>
                    <StarRatingComponent rating={4} starContainer={styles.starContainer}/>
                    <Text style={styles.recommendation}>
                        <Icon name="trophy" size={19}/>{item.recommendations}
                    </Text>
                </View>
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: { marginVertical: 12, borderRadius: 4 },
    cardTitle: { fontWeight: 'normal' },
    cardSub: { fontSize: 13, color: '#0097e8' },
    ratingContainer:{flexDirection:'row', justifyContent:'flex-start'},
    recommendation: { fontSize: 13, marginVertical: 16, flex:1},
    starContainer:{flex:2, flexDirection: 'row', marginVertical:16},
});

export default Item;
