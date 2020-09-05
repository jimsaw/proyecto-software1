import React from 'react';
import { Card } from '@uifabric/react-cards';
import { Text } from '@fluentui/react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
//import { ComboBox, IComboBoxOption, IComboBox } from 'office-ui-fabric-react/lib/index';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { CommonLoading } from 'react-loadingg';


initializeIcons(/* optional base url */);

var telefono_asterisk = '0983601005';
//var telefono_asterisk_vacio = '';

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
    }
}

const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { width: '100%', paddingLeft: 40, } };
const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: '80%' } },
};

class Identificacion extends React.Component {
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
                    if (items[i].genero === 'M') {
                        return (
                            <div style={container}>
                                <div className="s-Grid-col ms-sm-3 ms-xl12" key={items[i].id}>
                                    <Card style={styles.cardStyles}>
                                        <Card.Section>
                                            <Card.Item>
                                                <i style={icon} className={`ms-Icon ms-Icon--UserOptional`} aria-hidden="true"></i>
                                                <Text style={styles.header.root}>Identificación</Text>
                                            </Card.Item>
                                            <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                                                <Stack {...columnProps}>
                                                    <TextField styles={getStyles} label="Nombre:" underlined defaultValue={items[i].first_name} />
                                                    <TextField styles={getStyles} label="Cédula:" underlined defaultValue={items[i].cedula} />
                                                    <TextField styles={getStyles} label="Género:" underlined defaultValue='Masculino' />
                                                </Stack>
                                            </Stack>
                                        </Card.Section>
                                    </Card>
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <div style={container}>
                                <div className="s-Grid-col ms-sm-3 ms-xl12" key={items[i].id}>
                                    <Card style={styles.cardStyles}>
                                        <Card.Section>
                                            <Card.Item>
                                                <i style={icon} className={`ms-Icon ms-Icon--UserOptional`} aria-hidden="true"></i>
                                                <Text style={styles.header.root}>Identificación</Text>
                                            </Card.Item>
                                            <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                                                <Stack {...columnProps}>
                                                    <TextField styles={getStyles} label="Nombre:" underlined defaultValue={items[i].first_name + ' ' + items[i].last_name} />
                                                    <TextField styles={getStyles} label="Cédula:" underlined defaultValue={items[i].cedula} />
                                                    <TextField styles={getStyles} label="Género:" underlined defaultValue='Femenino' />
                                                </Stack>
                                            </Stack>
                                        </Card.Section>
                                    </Card>
                                </div>
                            </div>
                        );
                    }
                }
            }
            return (
                <div style={container}>
                    <div className="s-Grid-col ms-sm-3 ms-xl12" key='1'>
                        <Card style={styles.cardStyles}>
                            <Card.Section>
                                <Card.Item>
                                    <i style={icon} className={`ms-Icon ms-Icon--UserOptional`} aria-hidden="true"></i>
                                    <Text style={styles.header.root}>Identificación</Text>
                                </Card.Item>
                                <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                                    <Stack {...columnProps}>
                                        <TextField styles={getStyles} label="Nombre:" underlined defaultValue='' />
                                        <TextField styles={getStyles} label="Cédula:" underlined defaultValue='' />
                                        <TextField styles={getStyles} label="Género:" underlined defaultValue='' />
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

export default Identificacion;

function getStyles(props: ITextFieldStyleProps): Partial<ITextFieldStyles> {
    return {
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