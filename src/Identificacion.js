import React from 'react';
import { Card } from '@uifabric/react-cards';
import { Text } from '@fluentui/react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import 'office-ui-fabric-react/dist/css/fabric.css';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { ComboBox, IComboBoxOption, IComboBox } from 'office-ui-fabric-react/lib/index';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

initializeIcons(/* optional base url */);

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

const cards = [
    {
        title: 'Identificación',
        nombre: 'Luis Montenegro',
        icon: 'UserOptional',
        cedula: '1310559387',
        genero: 'Masculino',
        key: 'key1'
    }
]

const items: IComboBoxOption[] = [
    { key: 'A', text: 'Luis Montenegro' },
    { key: 'B', text: 'Melanie Lasso' },
    { key: 'C', text: 'Oscar Pallazhco' },
    { key: 'D', text: 'Pedro Macias' },
];

//const comboBoxStyle = { maxWidth: 300 };
const ComboBoxCustomStyledExampleStyles = {
    label: {
        color: '#0078d4',
        fontWeight: 'bold',
        fontSize: 20,
    },

};

const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { width: '100%', paddingLeft: 40, } };
const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: '80%' } },
};

const Identificacion = () => {

    const [selectedKey, setSelectedKey] = React.useState('C');

    const onChange = React.useCallback(
        (ev: React.FormEvent<IComboBox>, option?: IComboBoxOption): void => {
            setSelectedKey(option?.key);
        },
        [setSelectedKey],
    );

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
                                    <ComboBox style={ComboBoxCustomStyledExampleStyles} selectedKey={selectedKey} label="Nombre:" allowFreeform autoComplete="on" options={items} onChange={onChange} />
                                    <TextField styles={getStyles} label="Cédula:" underlined defaultValue={card.cedula} />
                                    <TextField styles={getStyles} label="Género:" underlined defaultValue={card.genero} />
                                </Stack>
                            </Stack>
                        </Card.Section>
                    </Card>
                </div>
            ))}
        </div>
    );
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