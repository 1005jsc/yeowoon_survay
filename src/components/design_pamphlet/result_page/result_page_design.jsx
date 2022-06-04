import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { ScrollView, StyleSheet } from 'react-native';
import * as R  from './result_page_components/result_page_components';
import { ImageImg, StatusBarView } from '../common_components/common_components.style';
import { ButtonToKakaotalkShareText, ButtonToTripDiaryText, HashTagText, LogoText, ResultText, TitleText } from './result_page_components/result_page_components.style';



const styles = StyleSheet.create({
    touchableOpacity:{
        backgroundColor: '#524882',
        borderRadius: 18,
        paddingTop: 10, 
        paddingBottom: 10,
        paddingLeft:14, 
        paddingRight:14,
    }
})

export function ResultPage({ navigation }) {

 

    return (
        <ScrollView>
            <R.FirstView>
                <StatusBarView></StatusBarView>

                <R.LogoView>
                    <LogoText>Yeowoon</LogoText>
                </R.LogoView>

                <R.TitleView>
                    <TitleText>나의 여행자 유형은?</TitleText>
                </R.TitleView>

                <R.ResultView>
                    <ResultText>여행 중에는 유노윤호!{'\n'}열정넘치는 닥스훈트형</ResultText>
                </R.ResultView>

                <R.ImageView>
                    <ImageImg source={require(`../../../../public/img/survay/result_page/1.png`)}/>
                </R.ImageView>
                
                <R.HashTagView>
                    <HashTagText>#열정 #활발 #엑티비티 #외향적</HashTagText>
                </R.HashTagView>

                <R.TypeExplanationView1>
                    
                </R.TypeExplanationView1>

                <R.TypeExplanationView1>

                </R.TypeExplanationView1>

                <R.TypeExplanationView1>

                </R.TypeExplanationView1>

                <R.TypeExplanationView2></R.TypeExplanationView2>

                <R.TypeExplanationView3></R.TypeExplanationView3>

                <R.ButtonToTripDiaryView>
                    <ButtonToTripDiaryText>여운 App으로 나의 {'\n'}여행 기록해보기</ButtonToTripDiaryText>
                </R.ButtonToTripDiaryView>

                <R.ButtonToKakaotalkShareView>
                    <ButtonToKakaotalkShareText>친구에게 내 결과 공유하기</ButtonToKakaotalkShareText>

                </R.ButtonToKakaotalkShareView>


            </R.FirstView>
        </ScrollView>
    );
}
