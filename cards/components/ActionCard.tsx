import {
  View,
  Text,
  StyleSheet,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  const openWebsite = (link: string) => {
    Linking.openURL(link);
  };
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headingContainer_text}>Learn JavaScript</Text>
        </View>
        <Image
          source={{
            uri: 'https://miro.medium.com/v2/resize:fit:1358/1*46Z2hagPvK_9Kg20AbLHcQ.png',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={2} style={styles.bodyContainer_text}>
            JavaScript (JS) is a scripting language designed to give websites a
            more interactive and enjoyable experience for users. It helps you to
            change the behaviour of a website. For example, page transitions and
            animations, interactive menus, interactive maps, scrolling text and
            so much more… It is a great technology that is used for web
            development and it works perfectly with HTML and CSS to enhance the
            users experience.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://medium.com/@lailanassali/learn-javascript-in-10-minutes-youtube-blog-post-77eca04582a6',
              )
            }>
            <Text style={styles.footerLink}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://medium.com/@lailanassali/learn-javascript-in-10-minutes-youtube-blog-post-77eca04582a6',
              )
            }>
            <Text style={styles.footerLink}>Follow Me</Text>
          </TouchableOpacity>
        </View>
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
  card: {
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#dd4b60',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#2c0f13',
    shadowOpacity: 0.4,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headingContainer: {
    marginBottom: 10,
    justifyContent: 'center',
  },
  headingContainer_text: {
    color: '#fcedef',
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardImage: {
    width: '100%',
    height: 200,
  },
  bodyContainer: {
    marginVertical: 10,
  },
  bodyContainer_text: {
    color: '#fcedef',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerLink: {
    fontSize: 16,
    color: '#dd4b60',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
});

export default ActionCard;
