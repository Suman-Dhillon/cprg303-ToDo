import React from "react";
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About({ }){
    return (
        <MainLayout>
            <View>
                <Text>Suman's awesome To Do List App</Text>
                <Text>Created by Sumandeep Kaur</Text>
                <Text>Version: 0.1.1</Text>
            </View>
        </MainLayout>
    );
}

export default About;