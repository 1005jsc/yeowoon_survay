import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as S from './question_page_components/static_components/static_components';
import { ChoiceText, PageIndicator, QuestionText, StatusBarView } from './question_page_components/static_components/static_components.style';
import { ImageImg } from './question_page_components/dynamic_components/dynamic_components.style';




export function No1({ navigation }) {



    return (
        <S.FirstView>
            <StatusBarView></StatusBarView>
            <PageIndicator></PageIndicator>
            <S.ImageView>
                <ImageImg source={require(`../../../../public/img/survay/question_page/1.png`)}/>
            </S.ImageView>

            <S.QuestionView>
                <QuestionText>어느새 다가온 휴가 시즌... {"\n"}여행을 어떻게 준비할까?</QuestionText>
            </S.QuestionView>



            <S.ChoiceView>
                <ChoiceText>떠날 나라와 지역이면 충분하지!</ChoiceText>
            </S.ChoiceView>
            <S.ChoiceView>
                <ChoiceText>저렴한 항공부터 인기 장소까지!{"\n"}꼼꼼한 준비가 후회가 없는 법!</ChoiceText>
            </S.ChoiceView>


        </S.FirstView>
      



    );
}