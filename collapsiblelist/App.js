import React, { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import CollapsibleList from 'react-native-collapsible-list';
import { MaterialIcons } from '@expo/vector-icons';

const App = () => {
  const [collapsedTopic, setCollapsedTopic] = useState('arrow-drop-down');
  const [collapsedCaption, setCollapsedCaption] = useState('add');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <CollapsibleList
          numberOfVisibleItems={0}
          wrapperStyle={styles.wrapperCollapsibleList}
          buttonPosition={'top'}
          onToggle={(collapsed) =>
            collapsed
              ? setCollapsedTopic('arrow-drop-up')
              : setCollapsedTopic('arrow-drop-down')
          }
          buttonContent={
            <View style={styles.topic}>
              <Text style={styles.title}>Vinai</Text>
              <MaterialIcons name={collapsedTopic} size={35} color="#000" />
            </View>
          }>
          <CollapsibleList
            numberOfVisibleItems={0}
            wrapperStyle={styles.wrapperCollapsibleList}
            buttonPosition={'top'}
            onToggle={(collapsed) =>
              collapsed
                ? setCollapsedCaption('minimize')
                : setCollapsedCaption('add')
            }
            buttonContent={
              <View style={styles.topic}>
                <Text style={styles.subTitle}>Vinai da silva</Text>
                <MaterialIcons name={collapsedCaption} size={20} color="#000" />
              </View>
            }>
            <Text style={styles.text}>
              O incentivo ao avanço tecnológico, assim como o acompanhamento das
              preferências de consumo promove a alavancagem do retorno esperado
              a longo prazo.
            </Text>
          </CollapsibleList>
        </CollapsibleList>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#073739',
  },
  wrapperCollapsibleList: {
    flex: 1,
    marginBottom: 5,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  topic: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#11807c',
    marginLeft: 5,
    width: '100%',
    alignItems: 'center',
    fontSize: 17,
    borderBottomWidth: 0.3,
    borderColor: '#11807c',
    paddingBottom: 2,
  },
  text: {
    margin: 5,
    color: '#000',
    fontSize: 15,
  },
  subTitle: {
    color: '#000',
    marginTop: 5,
    textAlign: 'justify',
    width: '100%',
    alignItems: 'center',
    fontSize: 20,
    paddingBottom: 2,
  },
});

export default App;
