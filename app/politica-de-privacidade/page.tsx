import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Política de Privacidade | Partidinha",
  description:
    "Saiba como o Partidinha coleta, usa e protege os dados do administrador e dos jogadores do seu grupo de pelada.",
};

export default function PoliticaDePrivacidadePage() {
  return (
    <LegalPage title="Política de Privacidade" updatedAt="4 de setembro de 2026">
      <p>
        Esta Política de Privacidade explica como o <strong>Partidinha</strong> ("nós",
        "nosso") coleta, usa, armazena e protege os dados pessoais dos administradores e
        jogadores que utilizam o aplicativo Partidinha e o bot de WhatsApp integrado
        ("Serviço"). Ao usar o Serviço, você concorda com as práticas descritas aqui.
      </p>

      <h2>1. Quem somos</h2>
      <p>
        O Partidinha é um aplicativo que, em conjunto com um bot de WhatsApp, ajuda
        administradores de grupos de futebol amador ("peladas") a organizar partidas,
        confirmar presença, sortear times, controlar pagamentos e registrar estatísticas.
      </p>

      <h2>2. Dados que coletamos</h2>
      <h3>2.1 Dados fornecidos pelo administrador</h3>
      <ul>
        <li>Nome, e-mail e telefone usados no cadastro da conta;</li>
        <li>Dados do grupo (nome do time, link de convite do WhatsApp);</li>
        <li>Informações de partidas: data, horário, local e valor cobrado;</li>
        <li>Registros de pagamento (quem pagou e quem está pendente), sem armazenar dados de cartão ou conta bancária de terceiros.</li>
      </ul>
      <h3>2.2 Dados fornecidos pelos jogadores via WhatsApp</h3>
      <ul>
        <li>Número de telefone e nome de exibição do WhatsApp;</li>
        <li>Respostas a comandos do bot (ex.: confirmações de presença);</li>
        <li>Estatísticas de jogo informadas pelo administrador (gols, assistências, cartões, nota de habilidade).</li>
      </ul>
      <h3>2.3 Dados coletados automaticamente</h3>
      <ul>
        <li>Dados de uso do aplicativo (telas acessadas, ações realizadas);</li>
        <li>Informações técnicas do dispositivo e logs de erro, para fins de segurança e melhoria do Serviço.</li>
      </ul>

      <h2>3. Como usamos os dados</h2>
      <ul>
        <li>Operar as funcionalidades do Serviço: confirmações, sorteio de times, cobrança e estatísticas;</li>
        <li>Enviar mensagens automáticas do bot no grupo de WhatsApp (lembretes, cobranças e resultados);</li>
        <li>Melhorar, corrigir falhas e desenvolver novas funcionalidades do Serviço;</li>
        <li>Cumprir obrigações legais e responder a solicitações de autoridades competentes.</li>
      </ul>
      <p>Não vendemos dados pessoais a terceiros.</p>

      <h2>4. Compartilhamento de dados</h2>
      <p>Podemos compartilhar dados com:</p>
      <ul>
        <li>
          <strong>Meta/WhatsApp</strong>, na medida necessária para o funcionamento do bot
          dentro do grupo, sujeito também às políticas do próprio WhatsApp;
        </li>
        <li>
          Fornecedores de infraestrutura e hospedagem que processam dados em nosso nome,
          sob obrigações contratuais de confidencialidade;
        </li>
        <li>Autoridades públicas, quando exigido por lei ou ordem judicial.</li>
      </ul>
      <p>
        Dentro do próprio grupo, os demais jogadores podem visualizar informações que o
        administrador tornar públicas no app ou que o bot publicar no WhatsApp (por
        exemplo, lista de confirmados, saldo de pagamentos e estatísticas).
      </p>

      <h2>5. Armazenamento e segurança</h2>
      <p>
        Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados contra
        acesso não autorizado, perda ou alteração. Os dados são mantidos pelo tempo
        necessário para cumprir as finalidades descritas nesta política ou enquanto sua
        conta estiver ativa.
      </p>

      <h2>6. Seus direitos</h2>
      <p>
        Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode
        solicitar a qualquer momento:
      </p>
      <ul>
        <li>Confirmação da existência de tratamento e acesso aos seus dados;</li>
        <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
        <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei;</li>
        <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
        <li>Revogação do consentimento e exclusão dos dados tratados com base nele.</li>
      </ul>
      <p>
        Para exercer esses direitos, entre em contato pelo e-mail{" "}
        <a href="mailto:contato@partidinha.com">contato@partidinha.com</a>.
      </p>

      <h2>7. Dados de menores</h2>
      <p>
        O Serviço não é direcionado a menores de 18 anos sem supervisão de um responsável.
        Se um administrador cadastrar jogadores menores de idade, é de sua responsabilidade
        obter as autorizações necessárias.
      </p>

      <h2>8. Alterações desta política</h2>
      <p>
        Podemos atualizar esta Política de Privacidade periodicamente. Alterações
        relevantes serão comunicadas por e-mail ou dentro do aplicativo. O uso continuado
        do Serviço após a alteração implica concordância com a nova versão.
      </p>

      <h2>9. Contato</h2>
      <p>
        Dúvidas sobre esta política podem ser enviadas para{" "}
        <a href="mailto:contato@partidinha.com">contato@partidinha.com</a>.
      </p>
    </LegalPage>
  );
}
