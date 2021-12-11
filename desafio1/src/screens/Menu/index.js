import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Menu = () => {
    const navigation = useNavigation();

    return (
        <>
            <ScrollView>
                <View>
                    <TouchableOpacity style={styles.button, { backgroundColor: '#0140A9' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 100 }}>Meu Neon</Text>
                            <View style={styles.imagem}>
                                <Image
                                    source={require('../../../assets/meu.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#0075E6' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 140 }}>Saldo</Text>
                            <View style={styles.imagem}>
                                <Image
                                    source={require('../../../assets/olho.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#0195FF' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 130 }}>Crédito</Text>
                            <View style={styles.imagem}>
                                <Image
                                    source={require('../../../assets/cartao.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#00D1CE' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 70 }}>Investimentos</Text>
                            <View style={styles.imagem}>
                                <Image
                                    source={require('../../../assets/investimentos.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#01919C' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 18 }}>Cartões e Cashback</Text>
                            <View style={styles.imagem}>
                                <Image
                                    source={require('../../../assets/cashback.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#007881' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 25 }}>Minhas Conquistas</Text>
                            <View style={styles.imagem}>
                                <Image
                                    source={require('../../../assets/trofeu.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#01919C' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 180 }}>Pix</Text>
                            <View style={styles.imagem}>
                                <Image
                                    source={require('../../../assets/pix.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#00D1CE' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 95 }}>Pagamentos</Text>
                            <View style={styles.imagem}>
                                <Image
                                    source={require('../../../assets/pagamentos.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#0195FF' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 85 }}>Transferências</Text>
                            <View style={styles.imagem}>
                                <Image
                                    source={require('../../../assets/transferencias.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#0075E6' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 140 }}>Recargas</Text>
                            <View style={styles.imagem}>
                                <Image
                                    source={require('../../../assets/recarga.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#0140A9' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 150 }}>Depósitos</Text>
                            <View style={styles.imagem}>
                                <Image
                                    source={require('../../../assets/depositos.png')}
                                    style={{ width: 40, height: 40 }}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        //   flex: 1,

    },
    button: {
        alignItems: 'center',
        width: '100%',
        height: 200,
        justifyContent: 'center',
    },

    divimagem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imagem: {
        flex: 1
    }
});