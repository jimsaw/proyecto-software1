import * as React from 'react';
import { DefaultButton, PrimaryButton, Stack, IStackTokens } from 'office-ui-fabric-react';

export interface IButtonExampleProps {
    // These are set based on the toggles shown above the examples (not needed in real code)
    disabled?: boolean;
    checked?: boolean;
}

const styles = {
    paddingTop: 20,
    paddingLeft: 130,
    paddingBottom: 20,
}

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

const Boton1: React.FunctionComponent<IButtonExampleProps> = props => {
    const { disabled, checked } = props;

    return (
        <Stack style={styles} horizontal tokens={stackTokens}>
            <PrimaryButton text="Guardar" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} />
            <DefaultButton text="Editar" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} />
            <DefaultButton style={{ backgroundColor: 'red', color: 'white' }} text="Eliminar" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} />
        </Stack>
    );
};

function _alertClicked(): void {
    alert('Clicked');
}

export default Boton1;