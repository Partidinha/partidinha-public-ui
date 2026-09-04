import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/legal-page";

export const metadata: Metadata = {
  title: "Termos de Uso | Partidinha",
  description:
    "Condições de uso do aplicativo Partidinha e do bot de WhatsApp para organização de peladas.",
};

export default function TermosDeUsoPage() {
  return (
    <LegalPage title="Termos de Uso" updatedAt="4 de setembro de 2026">
      <p>
        Estes Termos de Uso ("Termos") regem o acesso e uso do aplicativo{" "}
        <strong>Partidinha</strong> e do bot de WhatsApp integrado ("Serviço"). Ao criar
        uma conta ou adicionar o bot ao seu grupo, você concorda com estes Termos. Se você
        não concordar, não utilize o Serviço.
      </p>

      <h2>1. Descrição do Serviço</h2>
      <p>
        O Partidinha permite que administradores de grupos de futebol amador organizem
        partidas, gerenciem confirmações de presença, sorteiem times, controlem cobranças
        e registrem estatísticas, com apoio de um bot que interage diretamente no grupo de
        WhatsApp.
      </p>

      <h2>2. Cadastro e responsabilidade da conta</h2>
      <ul>
        <li>Para usar o app, o administrador deve criar uma conta com dados verdadeiros e atualizados;</li>
        <li>Você é responsável por manter a confidencialidade das credenciais da sua conta e por todas as atividades realizadas nela;</li>
        <li>Você declara ser o administrador do grupo de WhatsApp no qual o bot é adicionado, ou possuir autorização para fazê-lo.</li>
      </ul>

      <h2>3. Uso do bot no WhatsApp</h2>
      <p>
        O bot interage no grupo por meio de comandos e mensagens automáticas (confirmações,
        lembretes de pagamento, resultados de sorteio e estatísticas). O funcionamento do
        bot depende da plataforma WhatsApp e está sujeito às políticas dessa plataforma,
        incluindo eventuais limitações, instabilidades ou indisponibilidades fora do nosso
        controle.
      </p>

      <h2>4. Cobranças e pagamentos entre jogadores</h2>
      <p>
        O Partidinha oferece uma ferramenta para o administrador registrar manualmente
        quem pagou ou está devendo pelas partidas. O Serviço <strong>não processa nem
        intermedia pagamentos</strong> entre jogadores e administrador — qualquer cobrança
        e recebimento ocorre fora do app, por meio combinado entre as partes. Não nos
        responsabilizamos por disputas financeiras entre administrador e jogadores.
      </p>

      <h2>5. Conduta dos usuários</h2>
      <p>Ao usar o Serviço, você concorda em não:</p>
      <ul>
        <li>Utilizar o bot ou o app para enviar spam, conteúdo ofensivo, ilegal ou que viole direitos de terceiros;</li>
        <li>Tentar acessar, modificar ou interferir indevidamente na infraestrutura do Serviço;</li>
        <li>Utilizar dados de outros jogadores obtidos pelo Serviço para finalidades diferentes da organização da própria pelada;</li>
        <li>Adicionar o bot a grupos sem ser administrador ou sem autorização para tanto.</li>
      </ul>

      <h2>6. Planos e cobrança pelo Serviço</h2>
      <p>
        O Partidinha pode oferecer um plano gratuito com funcionalidades limitadas e planos
        pagos com recursos adicionais. Os valores, formas de pagamento e condições de cada
        plano são informados no app antes da contratação. O cancelamento pode ser feito a
        qualquer momento pelo administrador, e as regras de reembolso seguem a legislação
        aplicável.
      </p>

      <h2>7. Propriedade intelectual</h2>
      <p>
        Todo o conteúdo, marca, design e código do Partidinha são de propriedade exclusiva
        da empresa ou de seus licenciantes. Nenhuma disposição destes Termos concede a você
        qualquer direito de uso da marca ou do software além do necessário para utilizar o
        Serviço conforme sua finalidade.
      </p>

      <h2>8. Disponibilidade e alterações do Serviço</h2>
      <p>
        Buscamos manter o Serviço disponível de forma contínua, mas não garantimos
        operação ininterrupta ou livre de erros. Podemos alterar, suspender ou
        descontinuar funcionalidades a qualquer momento, mediante aviso razoável quando
        possível.
      </p>

      <h2>9. Limitação de responsabilidade</h2>
      <p>
        O Serviço é fornecido "como está". Na máxima extensão permitida pela lei, não nos
        responsabilizamos por danos indiretos, lucros cessantes, ou por decisões tomadas
        pelo administrador com base em informações geradas pelo Serviço (como sorteios de
        times ou controle de pagamentos), tampouco por indisponibilidades da plataforma
        WhatsApp.
      </p>

      <h2>10. Encerramento</h2>
      <p>
        Você pode encerrar sua conta a qualquer momento e remover o bot do seu grupo de
        WhatsApp. Podemos suspender ou encerrar contas que violem estes Termos, mediante
        aviso prévio sempre que razoavelmente possível.
      </p>

      <h2>11. Alterações destes Termos</h2>
      <p>
        Podemos atualizar estes Termos periodicamente. Mudanças relevantes serão
        comunicadas por e-mail ou dentro do aplicativo. O uso continuado do Serviço após a
        alteração implica concordância com a nova versão.
      </p>

      <h2>12. Legislação aplicável</h2>
      <p>
        Estes Termos são regidos pelas leis da República Federativa do Brasil, com foro
        eleito para dirimir eventuais controvérsias, salvo disposição legal em contrário.
      </p>

      <h2>13. Contato</h2>
      <p>
        Dúvidas sobre estes Termos podem ser enviadas para{" "}
        <a href="mailto:contato@partidinha.com">contato@partidinha.com</a>. Para questões
        de privacidade, consulte nossa{" "}
        <a href="/politica-de-privacidade">Política de Privacidade</a>.
      </p>
    </LegalPage>
  );
}
