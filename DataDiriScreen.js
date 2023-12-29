// DataDiriScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const DataDiriScreen = ({ navigation }) => {
    const [nama, setNama] = useState('');
    const [hobi, setHobi] = useState('');

    const handleSimpan = () => {
        // Simpan data nama dan hobi ke penyimpanan atau state aplikasi
        // Misalnya: simpan ke AsyncStorage atau Redux state

        // Kemudian arahkan ke halaman beranda dengan membawa data pengguna
        navigation.navigate('Home', { namaPengguna: nama });
    };

    return (
        <View>
            <Text>Isi data diri:</Text>
            <TextInput
                placeholder="Nama"
                value={nama}
                onChangeText={(text) => setNama(text)}
            />
            <TextInput
                placeholder="Hobi"
                value={hobi}
                onChangeText={(text) => setHobi(text)}
            />
            <Button title="Simpan" onPress={handleSimpan} />
        </View>
    );
};

export default DataDiriScreen;
