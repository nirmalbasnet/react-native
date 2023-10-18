import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Nirmal Basnet',
      status: 'Go! get it done',
      imageUrl:
        'https://scontent.fktm10-1.fna.fbcdn.net/v/t1.18169-1/11146206_656503381121284_6209499903121861786_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=vUYGTo5CUisAX8u0dMe&_nc_oc=AQlum8C0LKjIu5xRkGM5B8BPoofW1dFbj4RNCp_2_tMg4xSrc2zy6PPRCTCk5aNFGaA&_nc_ht=scontent.fktm10-1.fna&oh=00_AfDPMCJlT15NaWEdHEl2tTq4yexo9U8ITSXqVxeyhABMqA&oe=655224C9',
    },
    {
      uid: 2,
      name: 'Nikita KC',
      status: 'Beauty lies inside',
      imageUrl:
        'https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/382167406_7178849405476201_2732184137240901929_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Euj94pWri94AX84Aurk&_nc_ht=scontent.fktm10-1.fna&oh=00_AfAf3MZ639n1b3tVmHVNZVbU6dkAW9W4i0_cZdpUXRJaqg&oe=652FE3AD',
    },
    {
      uid: 3,
      name: 'Purna Niraula',
      status:
        'Koi dhanda chota nahi hota aur dhande se bada koi dharam nahi hota',
      imageUrl:
        'https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/268345695_4500136456769964_7447973865883853564_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9rpeF_Yq4ZAAX95WxLS&_nc_ht=scontent.fktm10-1.fna&oh=00_AfB47OqgP2rKWFt43wHutVcHgEdFvdLRKESigmdNJH69RQ&oe=65309E0E',
    },
    {
      uid: 4,
      name: 'Charu Sinha',
      status: 'Go! get it done',
      imageUrl:
        'https://scontent.fktm10-1.fna.fbcdn.net/v/t1.18169-1/11146206_656503381121284_6209499903121861786_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=105&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=vUYGTo5CUisAX8u0dMe&_nc_oc=AQlum8C0LKjIu5xRkGM5B8BPoofW1dFbj4RNCp_2_tMg4xSrc2zy6PPRCTCk5aNFGaA&_nc_ht=scontent.fktm10-1.fna&oh=00_AfDPMCJlT15NaWEdHEl2tTq4yexo9U8ITSXqVxeyhABMqA&oe=655224C9',
    },
    {
      uid: 5,
      name: 'Harsh Mehta',
      status: 'Beauty lies inside',
      imageUrl:
        'https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/382167406_7178849405476201_2732184137240901929_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Euj94pWri94AX84Aurk&_nc_ht=scontent.fktm10-1.fna&oh=00_AfAf3MZ639n1b3tVmHVNZVbU6dkAW9W4i0_cZdpUXRJaqg&oe=652FE3AD',
    },
    {
      uid: 6,
      name: 'Vilas Rao',
      status:
        'Koi dhanda chota nahi hota aur dhande se bada koi dharam nahi hota',
      imageUrl:
        'https://scontent.fktm10-1.fna.fbcdn.net/v/t39.30808-6/268345695_4500136456769964_7447973865883853564_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=9rpeF_Yq4ZAAX95WxLS&_nc_ht=scontent.fktm10-1.fna&oh=00_AfB47OqgP2rKWFt43wHutVcHgEdFvdLRKESigmdNJH69RQ&oe=65309E0E',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <View style={styles.container}>
        <ScrollView nestedScrollEnabled={true}>
          {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid.toString()} style={styles.userCard}>
              <Image source={{uri: imageUrl}} style={styles.userImage} />
              <View style={styles.userStatusContainer}>
                <Text style={styles.userName}>{name}</Text>
                <View>
                  <Text style={styles.userStatus}>{status}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    marginVertical: 12,
    marginHorizontal: 16,
    paddingBottom: 12,
    maxHeight: 255,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 3,
    alignItems: 'center',
    backgroundColor: '#bf00ff',
    paddingLeft: 3,
    paddingVertical: 6,
    borderRadius: 14,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  userStatusContainer: {
    flex: 5,
  },
  userStatus: {
    fontSize: 12,
    color: '#f9e6ff',
  },
});

export default ContactList;
