import React from 'react';
import {
View,
Text,
StyleSheet,
ScrollView,
Image,
TouchableOpacity,
SafeAreaView
} from 'react-native';

const LessonDetailScreen = ({ route, navigation }) => {
const { lesson } = route.params;
// เนื้อหาบทเรียนจําลอง
const lessonContent = {
'1': {
sections: [
{
title: 'บทนํา',
content: 'การเขียนโปรแกรมคือกระบวนการในการสร้างชุดคําสั่งที่คอมพิวเตอร์สามารถเข้าใจและทํางานตามได้ ในบทนี้เราจะเรียนรู้เกี่ยวกับหลักการพื้นฐานของการเขียนโปรแกรม แนวคิด และวิธีการคิดอย่างเป็นระบบ'
},
{
title: 'แนวคิดพื้นฐาน',
content: 'แนวคิดพื้นฐานในการเขียนโปรแกรมประกอบด้วยตัวแปร การประมวลผล และการควบคุมการทํางาน ซึ่งเป็นพื้นฐานสําหรับการสร้างโปรแกรมทุกประเภท ไม่ว่าจะเป็นภาษาโปรแกรมใดก็ตาม'
},
{
title: 'เครื่องมือที่ใช้',
content: 'เครื่องมือที่ใช้ในการเขียนโปรแกรมมีหลากหลาย เช่น Text Editor, IDE (Integrated Development Environment) และ Compiler หรือ Interpreter ซึ่งแต่ละเครื่องมือมีข้อดีและข้อจํากัดที่แตกต่างกัน'
},
]
},
'2': {
sections: [
{
title: 'ตัวแปรคืออะไร',
content: 'ตัวแปรคือชื่อที่ใช้เก็บค่าข้อมูลในหน่วยความจําของคอมพิวเตอร์ ซึ่งเราสามารถเรียกใช้ และเปลี่ยนแปลงค่าได้ตลอดการทํางานของโปรแกรม'
},
{
title: 'ประเภทข้อมูล',
content: 'ประเภทข้อมูลบอกถึงชนิดของข้อมูลที่เก็บในตัวแปร เช่น ตัวเลขจํานวนเต็ม (Integer), จํานวนจริง (Float), ข้อความ (String), และค่าความจริง (Boolean)'
},
]
},
'3': {
sections: [
{
title: 'คําสั่งเงื่อนไข',

content: 'คําสั่งเงื่อนไขใช้ในการตัดสินใจว่าจะทํางานส่วนใดของโปรแกรม เช่น if-else, switch-case โดยขึ้นอยู่กับเงื่อนไขที่กําหนด'

},
]
},
'4': {
sections: [
{
title: 'ฟังก์ชันคืออะไร',
content: 'ฟังก์ชันคือกลุ่มคําสั่งที่รวมกันเพื่อทํางานอย่างใดอย่างหนึ่ง ช่วยให้โค้ดเป็นระเบียบและนํากลับมาใช้ใหม่ได้'
},
]
},
'5': {
sections: [
{
title: 'โครงสร้างข้อมูล',
content: 'โครงสร้างข้อมูลคือวิธีการจัดเก็บและจัดการข้อมูลในรูปแบบต่างๆ เช่น อาร์เรย์ ลิงค์ ลิสต์ สแตก คิว'
},
]
},
};

const currentContent = lessonContent[lesson.id] || {
sections: [{ title: 'ไม่พบเนื้อหา', content: 'ไม่พบเนื้อหาสําหรับบทเรียนนี้' }]
};

return (
<SafeAreaView style={styles.safeArea}>
<ScrollView style={styles.container}>
<Image source={lesson.image} style={styles.lessonImage} />

<View style={styles.contentContainer}>
<Text style={styles.title}>{lesson.title}</Text>

<View style={styles.metaContainer}>
<View style={styles.metaItem}>
<Text style={styles.metaLabel}>ระยะเวลา:</Text>
<Text style={styles.metaValue}>{lesson.duration}</Text>
</View>
<View style={styles.metaItem}>
<Text style={styles.metaLabel}>ระดับ:</Text>
<Text style={[
styles.metaValue,
lesson.level === 'เริ่มต้น' ? styles.beginnerLevel :
lesson.level === 'ปานกลาง' ? styles.intermediateLevel :
styles.advancedLevel
]}>
{lesson.level}
</Text>
</View>
</View>

<Text style={styles.description}>{lesson.description}</Text>

<View style={styles.divider} />
{/* เนื้อหาบทเรียน */}
{currentContent.sections.map((section, index) => (
<View key={index} style={styles.section}>
<Text style={styles.sectionTitle}>{section.title}</Text>
<Text style={styles.sectionContent}>{section.content}</Text>
</View>
))}

{/* ปุ่มทําแบบทดสอบ */}
<TouchableOpacity style={styles.testButton}>
<Text style={styles.testButtonText}>ทําแบบทดสอบ</Text>
</TouchableOpacity>
</View>
</ScrollView>
</SafeAreaView>
);
};

const styles = StyleSheet.create({
safeArea: {
flex: 1,
backgroundColor: '#f8f9fa',
},
container: {
flex: 1,
},
lessonImage: {
width: '100%',
height: 200,
resizeMode: 'cover',
},
contentContainer: {
padding: 16,
},
title: {
fontSize: 24,
fontWeight: 'bold',
color: '#333',
marginBottom: 12,
},
metaContainer: {
flexDirection: 'row',
marginBottom: 16,
},
metaItem: {
flexDirection: 'row',
marginRight: 20,
},
metaLabel: {
    fontSize: 14,
color: '#666',
marginRight: 4,
},
metaValue: {
fontSize: 14,
fontWeight: 'bold',
color: '#333',
},
beginnerLevel: {
color: '#28a745',
},
intermediateLevel: {
color: '#fd7e14',
},
advancedLevel: {
color: '#dc3545',
},
description: {
fontSize: 16,
color: '#555',
lineHeight: 24,
marginBottom: 20,
},
divider: {
height: 1,
backgroundColor: '#e1e1e1',
marginVertical: 20,
},
section: {
marginBottom: 20,
},
sectionTitle: {
    fontSize: 20,
fontWeight: 'bold',
color: '#333',
marginBottom: 10,
},
sectionContent: {
fontSize: 16,
color: '#555',
lineHeight: 24,
},
testButton: {
backgroundColor: '#5e72e4',
paddingVertical: 12,
borderRadius: 8,
alignItems: 'center',
marginTop: 20,
marginBottom: 30,
},
testButtonText: {
color: '#ffffff',
fontWeight: 'bold',
fontSize: 16,
},
});

export default LessonDetailScreen;