import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

export function Background() {
    return (
        <>
            <LinearGradient
                start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
                locations={[0, 0.5, 0.6]}
                colors={['#407258', '#37624c', '#2e513f']}
                style={styles.background} >
            </LinearGradient>
        </>
    );
}
