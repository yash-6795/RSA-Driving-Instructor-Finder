import StarRating from 'react-native-star-rating';
import React from "react";
import {View} from 'react-native'
import {Text} from "react-native-paper";

const StarRatingComponent = ({rating, starContainer}) => {
    return (
        <View style={starContainer}>
            <StarRating
                disabled={true}
                emptyStar={'ios-star-outline'}
                fullStar={'ios-star'}
                halfStar={'ios-star-half'}
                iconSet={'Ionicons'}
                maxStars={5}
                rating={rating}
                fullStarColor={'yellow'}
                starSize={20}
            />
            <Text style={{marginTop:2}}>{rating}</Text>
        </View>

    );
}

export default StarRatingComponent
