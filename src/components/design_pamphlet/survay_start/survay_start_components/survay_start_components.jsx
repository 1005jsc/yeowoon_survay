import React from 'react';
import * as T from './survay_start_components.style'


export const FirstView = ({children}) => {
    return <T.FirstView>{children}</T.FirstView>
}

export const TitleView = ({children}) => {
    return <T.TitleView>{children}</T.TitleView>
}
export const SemiTitleView = ({children}) => {
    return <T.SemiTitleView>{children}</T.SemiTitleView>
}

export const ImageView = ({children}) => {
    return <T.ImageView>{children}</T.ImageView>
}

export const ButtonStartView = ({children}) => {
    return <T.ButtonStartView>{children}</T.ButtonStartView>
}

export const LogoView = ({children}) => {
    return <T.LogoView>{children}</T.LogoView>
}
