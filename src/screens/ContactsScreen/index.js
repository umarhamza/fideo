import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import dummyContacts from '../../../assets/data/contacts.json';

const ContactsScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

  useEffect(() => {
      const newContacts = dummyContacts.filter(
        (contact) =>
          contact.user_display_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredContacts(newContacts);

    if (searchTerm.trim() === '') {
      setSearchTerm('')
    }
  }, [searchTerm]);

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.search}
        onChangeText={setSearchTerm}
        placeholder='Search...'
      />
      <FlatList
        data={filteredContacts}
        renderItem={({ item }) => (
          <Text style={styles.contactName}>{item.user_display_name}</Text>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 15,
    backgroundColor: '#fff',
    flex: 1,
    height: '100%',
  },
  contactName: {
    fontSize: 16,
    marginVertical: 10,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f0f0f0',
  },
  search: {
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default ContactsScreen;
