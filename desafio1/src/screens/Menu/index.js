import React from 'react';
import { Text, TouchableOpacity, View, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export const Menu = () => {
    const navigation = useNavigation();

    return (
        <>
            <ScrollView>
                <View>
                    <TouchableOpacity style={styles.button, { backgroundColor: '#0140A9' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 110 }}>Meu Neon</Text>
                            <View >
                                <Image style={styles.imagem}
                                    source={require('../../../assets/meu.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#0075E6' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 150 }}>Saldo</Text>
                            <View style={styles.imagem}>
                                <Image style={styles.imagem}
                                    source={require('../../../assets/olho.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#0195FF' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 135 }}>Crédito</Text>
                            <View style={styles.imagem}>
                                <Image style={styles.imagem}
                                    source={require('../../../assets/cartao.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#00D1CE' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 70 }}>Investimentos</Text>
                            <View style={styles.imagem}>
                                <Image style={styles.imagem}
                                    source={require('../../../assets/investimentos.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#01919C' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 18 }}>Cartões e Cashback</Text>
                            <View style={styles.imagem}>
                                <Image style={styles.imagem}
                                    source={require('../../../assets/cashback.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#007881' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 25 }}>Minhas Conquistas</Text>
                            <View style={styles.imagem}>
                                <Image style={styles.imagem}
                                    source={require('../../../assets/trofeu.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#01919C' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 174 }}>Pix</Text>
                            <View style={styles.imagem}>
                                <Image style={styles.imagem}
                                    source={require('../../../assets/pix.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#00D1CE' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 85 }}>Pagamentos</Text>
                            <View style={styles.imagem}>
                                <Image style={styles.imagem}
                                    source={require('../../../assets/pagamentos.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#0195FF' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 65 }}>Transferências</Text>
                            <View style={styles.imagem}>
                                <Image style={styles.imagem}
                                    source={require('../../../assets/transferencias.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#0075E6' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 115 }}>Recargas</Text>
                            <View style={styles.imagem}>
                                <Image style={styles.imagem}
                                    source={require('../../../assets/recarga.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button, { backgroundColor: '#0140A9' }}>
                        <View style={styles.divimagem}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: "bold", padding: 40, marginRight: 105 }}>Depósitos</Text>
                            <View style={styles.imagem}>
                                <Image style={styles.imagem}
                                    source={require('../../../assets/depositos.png')}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}
