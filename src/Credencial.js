import React from 'react';
import { Card } from '@uifabric/react-cards';
import { Text } from '@fluentui/react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

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
    email: {
        root: {
            fontSize: 26,
            paddingBottom: 20,
            paddingTop: 30,
        }
    },
    fnacimiento: {
        root: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#0078d4',
        }
    },
    edad: {
        root: {
            fontSize: 18,
            paddingBottom: 20,
            paddingTop: 20,
        }
    }
}

const cards = [
    {
        title: 'Credencial/Edad',
        email: 'lfmonten@espol.edu.ec',
        icon: 'MailAlert',
        fnaciemiento: '08/03/1996',
        edad: '24 años',
        key: 'key2'
    }
]

const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { width: '100%', paddingLeft: 40, } };
const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: '80%' } },
};

const Credencial = () => {
    return (
        <div style={container}>
            {cards.map((card) => (
                <div className="s-Grid-col ms-sm-3 ms-xl12" key={card.key}>
                    <Card style={styles.cardStyles}>
                        <Card.Section>
                            <Card.Item>
                                <i style={icon} className={`ms-Icon ms-Icon--${card.icon}`} aria-hidden="true"></i>
                                <Text style={styles.header.root}>{card.title}</Text>
                            </Card.Item>
                            <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                                <Stack {...columnProps}>
                                    <TextField styles={getStyles} label="Email:" underlined defaultValue={card.email} />
                                    <TextField styles={getStyles} label="Fecha de nacimiento:" underlined defaultValue={card.fnaciemiento} />
                                    <TextField styles={getStyles} label="Edad:" underlined defaultValue={card.edad} />
                                </Stack>
                            </Stack>
                        </Card.Section>
                    </Card>
                </div>
            ))}
        </div>
    );
};

export default Credencial;

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