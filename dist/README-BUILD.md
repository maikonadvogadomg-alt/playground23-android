# Build APK — Playground1

## Configuração
- **Expo Owner:** SEU_USUARIO_EXPO
- **Project ID:** SEU_PROJECT_ID_AQUI
- **Package:** com.usuario.playground1
- **Versão:** 1.0.0

## Como gerar APK

### Via GitHub Actions (recomendado)
1. Adicione o Secret `EXPO_TOKEN` no GitHub
2. Actions → "Build APK via EAS" → Run workflow
3. Escolha perfil: `preview` (APK)
4. Aguarde ~15 min → baixe em Artifacts

### Via terminal local
```bash
npm install
eas login
eas build --platform android --profile preview
```

## Perfis
| Perfil | Tipo | Uso |
|--------|------|-----|
| preview | APK | Instalar direto no celular |
| development | APK | Desenvolvimento |
| production | AAB | Google Play Store |

## Secret necessário
- `EXPO_TOKEN` → Token do Expo (expo.dev → Account Settings → Access Tokens)
