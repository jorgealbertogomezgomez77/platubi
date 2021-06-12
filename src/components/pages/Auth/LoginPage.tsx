import FacebookSVG from "../../atoms/SVG/FacebookSVG";
import GoogleSVG from "../../atoms/SVG/GoogleSVG";
import AuthAlternateAction from "../../molecules/AuthAlternateAction";
import LoginForm from "../../Forms/Login";
import AuthFrame from "./AuthFrame";
import { Separador, Side, Text } from "./Register/StepOne";
import SocialAuthButton from "./SocialAuthButton";
import { ContainerBase, SocialAuthButtonsContainer, Title } from "./Styles";
import { useAuth } from "../../../contexts/AuthContext";

export interface LoginPageProps {
  
}



const Colors = {
  Google: {dark: '#121212', light: '#FFFFFF'},
  Facebook: {dark: '#012646', light: '#E9F5FF'}
}
 
const LoginPage: React.FC<LoginPageProps> = () => {

  const { loginGoogle, loginFacebook } = useAuth()

  return (
    <AuthFrame>
      <ContainerBase>
        <Title>Iniciar sesión</Title>
        <SocialAuthButtonsContainer>
          <SocialAuthButton icon={<GoogleSVG />} label="Entrar con Google" colors={Colors.Google}
          authSocialMedia={loginGoogle} />
          <SocialAuthButton icon={<FacebookSVG />} label="Entrar con Facebook" colors={Colors.Facebook}
          authSocialMedia={loginFacebook} />
        </SocialAuthButtonsContainer>
        <Separador>
          <Side />
          <Text>O introduce tus datos de acceso</Text>
          <Side />
        </Separador>
        <LoginForm />
        <AuthAlternateAction type="login" />
      </ContainerBase>
    </AuthFrame>
  );
}
 
export default LoginPage;
