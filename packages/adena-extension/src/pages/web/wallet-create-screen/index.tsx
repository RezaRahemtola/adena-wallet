import { ReactElement } from 'react';

import { WebMain } from '@components/atoms';
import { WebMainHeader } from '@components/pages/web/main-header';

import GetMnemonicStep from './get-mnemonic-step';
import useWalletCreateScreen from '@hooks/web/use-wallet-create-screen';
import SensitiveInfoStep from '@components/pages/web/sensitive-info-step';
import { ADENA_DOCS_PAGE } from '@common/constants/resource.constant';

const WalletCreateScreen = (): ReactElement => {
  const useWalletCreateScreenReturn = useWalletCreateScreen();
  const { step, onClickGoBack, stepLength, walletCreateStepNo, onClickNext } =
    useWalletCreateScreenReturn;

  return (
    <WebMain>
      <WebMainHeader
        stepLength={stepLength}
        onClickGoBack={onClickGoBack}
        currentStep={walletCreateStepNo[step]}
      />
      {step === 'INIT' && (
        <SensitiveInfoStep
          desc={
            'This will generate a seed phrase on your device. Only proceed if you\nunderstand how to safely store your seed phrase.'
          }
          onClickNext={onClickNext}
          link={`${ADENA_DOCS_PAGE}/user-guide/sign-in/create-new-wallet`}
        />
      )}
      {step === 'GET_SEED_PHRASE' && (
        <GetMnemonicStep useWalletCreateScreenReturn={useWalletCreateScreenReturn} />
      )}
    </WebMain>
  );
};

export default WalletCreateScreen;
