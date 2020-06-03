import React, { useState, useEffect } from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import {Headline, Text, Title} from 'react-native-paper';
import {useDispatch, useSelector} from "react-redux";
import * as instructorActions from "app/actions/instructorActions"
import Item from "./Item";
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f0f6f9',
    },
    list: { marginHorizontal: 20 },
    headline: { marginBottom: 12, marginTop: 24, fontWeight: 'bold' },
});

export default function Instructors(){
    const dispatch = useDispatch();
    let instructors = useSelector(state => state.instructorReducer.instructors)
    let instructorsData = Object.keys(instructors).map((key)=>instructors[key])
    let isRefreshing = useSelector(state => state.instructorReducer.isListRefreshing)
    const tokens = useSelector(state => state.userReducer.user.tokens)
    if(Object.keys(instructors).length===0){
        dispatch(instructorActions.requestListOfInstructors(tokens))
    }
    const onRefresh = ()=>{
        dispatch(instructorActions.toggleFlatListRefresh(true))
        dispatch(instructorActions.requestListOfInstructors(tokens))
        dispatch(instructorActions.toggleFlatListRefresh(false))
    }
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                style={styles.list}
                data={instructorsData}
                renderItem={({ item }) => <Item item={item} />}
                ListHeaderComponent={() => (
                    <Headline style={styles.headline}>Instructors</Headline>
                )}
                stickySectionHeadersEnabled={false}
                showsVerticalScrollIndicator={false}
                onRefresh={onRefresh}
                refreshing={isRefreshing}
                // keyExtractor={item => item.id}
            />
        </SafeAreaView>
        );
}


