import React from 'react';
import { Card } from '@uifabric/react-cards';
import { Text } from '@fluentui/react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { CommonLoading } from 'react-loadingg';

var telefono_asterisk = '0983601005';

const container = {
    display: 'flex',
    justifyContent: 'center',
    margin: '1.5vh 0',
}

const icon = {
    fontSize: 30,
    padding: 15,
    verticalAlign: 'middle',
    paddingLeft: 0,
    color: '#0078d4',
}

const styles = {
    cardStyles: {
        backgroundColor: 'white',
        padding: 12,
        borderTop: '5px solid #0078d4',
        width: '90%',
        maxWidth: '90%',
        margin: 'auto',
    },
    header: {
        root: {
            fontSize: 20,
            fontWeight: 'bold',
        }
    },
    equipo: {
        root: {
            fontSize: 26,
            paddingBottom: 20,
            paddingTop: 30,
        }
    },
    direccion: {
        root: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#0078d4',
        }
    },
    hobbies: {
        root: {
            fontSize: 18,
            paddingBottom: 20,
            paddingTop: 20,
        }
    }
}

const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { width: '100%', paddingLeft: 40, } };
const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: '80%' } },
};

class ExtraInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/api/usuarios")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Nota: es importante manejar errores aquí y no en 
                // un bloque catch() para que no interceptemos errores
                // de errores reales en los componentes.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <CommonLoading style={{ margin: '5vh 0', }} />;
        } else {
            for (var i = 0; i < items.length; i++) {
                if (items.[i].telefono === telefono_asterisk) {
                    return (
                        <div style={container}>
                            <div className="s-Grid-col ms-sm-3 ms-xl12" key={items[i].id}>
                                <Card style={styles.cardStyles}>
                                    <Card.Section>
                                        <Card.Item>
                                            <i style={icon} className={`ms-Icon ms-Icon--Money`} aria-hidden="true"></i>
                                            <Text style={styles.header.root}>Credencial/Edad</Text>
                                        </Card.Item>
                                        <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                                            <Stack {...columnProps}>
                                                <TextField styles={getStyles} label="Equipo:" underlined defaultValue={items[i].equipo_futbol} />
                                                <TextField styles={getStyles} label="Dirección:" underlined defaultValue={items[i].direccion} />
                                                <TextField styles={getStyles} label="Hobbies:" underlined defaultValue={items[i].hobbies} />
                                            </Stack>
                                        </Stack>
                                    </Card.Section>
                                </Card>
                            </div>
                        </div>
                    );
                }
            }
            return (
                <div style={container}>
                    <div className="s-Grid-col ms-sm-3 ms-xl12" key={items[i].id}>
                        <Card style={styles.cardStyles}>
                            <Card.Section>
                                <Card.Item>
                                    <i style={icon} className={`ms-Icon ms-Icon--MailAlert`} aria-hidden="true"></i>
                                    <Text style={styles.header.root}>Credencial/Edad</Text>
                                </Card.Item>
                                <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                                    <Stack {...columnProps}>
                                        <TextField styles={getStyles} label="Equipo:" underlined defaultValue={items[i].equipo_futbol} />
                                        <TextField styles={getStyles} label="Dirección:" underlined defaultValue={items[i].direccion} />
                                        <TextField styles={getStyles} label="Hobbies:" underlined defaultValue={items[i].hobbies} />
                                    </Stack>
                                </Stack>
                            </Card.Section>
                        </Card>
                    </div>
                </div>
            );
        }
    }

};

export default ExtraInfo;

function getStyles(props: ITextFieldStyleProps): Partial<ITextFieldStyles> {
    return {
        //root: {
        //width: 25,
        //fontSize: 20,
        //},
        subComponentStyles: {
            label: getLabelStyles,
        },
    };
}

function getLabelStyles(props: ILabelStyleProps): ILabelStyles {
    return {
        root: [
            {
                color: '#0078d4',
                fontWeight: 'bold',
                fontSize: 20,
            },
        ],
    };
}