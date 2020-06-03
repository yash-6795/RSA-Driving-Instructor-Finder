import ProfileCard from "../../components/profile-card";
import {Button, Card, Divider, Text} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import React from "react";

const Item = ({item}) => {
    const onSelected = () => {
        console.log('item selected')
    }
    return(
        <Card style={styles.card}>
            <ProfileCard name={item.user.profile.name} avatar={item.user.profile.avatar} onSelected={onSelected} />
            <Card.Content>
                <Divider />
                <Text style={styles.duration}>
                    {item.recommendations}
                </Text>
                {/*<View style={styles.tags}>*/}
                {/*    {tags.map((itx, i) => {*/}
                {/*        const { labelColor, buttonColor } = random_rgba();*/}
                {/*        return (*/}
                {/*            <Button*/}
                {/*                key={i}*/}
                {/*                mode="contained"*/}
                {/*                disabled*/}
                {/*                compact*/}
                {/*                uppercase={false}*/}
                {/*                style={[styles.tag, { backgroundColor: buttonColor }]}*/}
                {/*                labelStyle={[styles.tagLabel, { color: labelColor }]}>*/}
                {/*                {itx}*/}
                {/*            </Button>*/}
                {/*        );*/}
                {/*    })}*/}
                {/*</View>*/}
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: { marginVertical: 12, borderRadius: 4 },
    cardTitle: { fontWeight: 'normal' },
    cardSub: { fontSize: 13, color: '#0097e8' },
    duration: { fontSize: 16, marginVertical: 16 },
    tags: { flexDirection: 'row' },
    tag: {
        marginRight: 4,
        borderRadius: 4,
    },
    tagLabel: { fontSize: 12 },
});

export default Item;
