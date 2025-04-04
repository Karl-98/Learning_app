import React from 'react';
import {
View,
Text,
StyleSheet,
FlatList,
TouchableOpacity,
Image,
SafeAreaView
} from 'react-native';

const LessonListScreen = ({ navigation }) => {
// ข้อมูลบทเรียนจําลอง
const lessons = [
{
id: '1',
title: 'บทที่ 1: พื้นฐานการเขียนโปรแกรม',
description: 'เรียนรู้พื้นฐานและแนวคิดในการเขียนโปรแกรม',
duration: '30 นาที',
level: 'Noob',
image: require('../assets/images/lesson1.png'),
},
{
    id: '2',
title: 'บทที่ 2: ตัวแปรและประเภทข้อมูล',
description: 'ทําความเข้าใจเกี่ยวกับตัวแปรและประเภทข้อมูลต่างๆ',
duration: '45 นาที',
level: 'Noob',
image: require('../assets/images/lesson2.png'),
},
{
id: '3',
title: 'บทที่ 3: โครงสร้างควบคุม',
description: 'เรียนรู้เกี่ยวกับโครงสร้างควบคุมการทํางานในโปรแกรม',
duration: '60 นาที',
level: 'Human',
image: require('../assets/images/lesson3.png'),
},
{
id: '4',
title: 'บทที่ 4: ฟังก์ชันและโมดูล',
description: 'เรียนรู้การสร้างและใช้งานฟังก์ชันและโมดูล',
duration: '60 นาที',
level: 'Human',
image: require('../assets/images/lesson4.png'),
},
{
id: '5',
title: 'บทที่ 5: การจัดการข้อมูล',
description: 'เรียนรู้การจัดการข้อมูลและโครงสร้างข้อมูล',
duration: '75 นาที',
level: 'God',
image: require('../assets/images/lesson5.png'),
},
];
const renderLessonItem = ({ item }) => (
    <TouchableOpacity
    style={styles.lessonCard}
    onPress={() => navigation.navigate('LessonDetail', {
    id: item.id,
    title: item.title,
    lesson: item
    })}
    >
    <Image source={item.image} style={styles.lessonImage} />
    <View style={styles.lessonContent}>
    <Text style={styles.lessonTitle}>{item.title}</Text>
    <Text style={styles.lessonDescription}>{item.description}</Text>
    <View style={styles.lessonMeta}>
    <View style={styles.metaItem}>
    <Text style={styles.metaText}>{item.duration}</Text>
    </View>
    <View style={styles.metaItem}>
    <Text style={[
    styles.metaText,
    styles.levelText,
    item.level === 'Noob' ? styles.beginnerLevel :
    item.level === 'Human' ? styles.intermediateLevel :
    styles.advancedLevel
    ]}>
    {item.level}
    </Text>
    </View>
    </View>
    </View>
    </TouchableOpacity>
    );
    return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>บทเรียนทั้งหมด</Text>
        <Text style={styles.subheaderText}>เลือกบทเรียนที่คุณต้องการเรียนรู้</Text>
        
        <FlatList
        data={lessons}
        renderItem={renderLessonItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        />
        </SafeAreaView>
        );
        };
        
        const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        padding: 16,
        },
        headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        },
        subheaderText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
        },
        listContainer: {
            paddingBottom: 16,
},
lessonCard: {
backgroundColor: '#ffffff',
borderRadius: 10,
marginBottom: 16,
overflow: 'hidden',
elevation: 3,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.1,
shadowRadius: 4,
},
lessonImage: {
width: '100%',
height: 150,
resizeMode: 'cover',
},
lessonContent: {
padding: 16,
},
lessonTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#333',
marginBottom: 8,
},
lessonDescription: {
fontSize: 14,
color: '#666',
marginBottom: 12,
lineHeight: 20,
},
lessonMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    },
    metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    },
    metaText: {
    fontSize: 12,
    color: '#777',
    },
    levelText: {
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 10,
    },
    beginnerLevel: {
    color: '#28a745',
    backgroundColor: '#e6f7ed',
    },
    intermediateLevel: {
    color: '#fd7e14',
    backgroundColor: '#fff3e6',
    },
    advancedLevel: {
    color: '#dc3545',
    backgroundColor: '#f8e6e8',
    },
    });
    
    export default LessonListScreen;