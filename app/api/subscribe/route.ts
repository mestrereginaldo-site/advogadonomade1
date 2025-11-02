import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email é obrigatório' },
        { status: 400 }
      );
    }

    // Configurar o transporte de email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email para você (o lead)
    const leadEmail = {
      from: process.env.EMAIL_USER,
      to: 'adv.regi.silva@gmail.com, contato@contratosexpresso.com.br',
      subject: '🎉 Novo Lead Capturado - Advogado Nômade',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Novo Lead Capturado! 🎯</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
          <p><strong>Origem:</strong> Formulário de captura do site Advogado Nômade</p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 14px;">
            Lead capturado automaticamente pelo sistema do site.
          </p>
        </div>
      `,
    };

    // Email de confirmação para o usuário
    const confirmationEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '📧 Confirmação de Cadastro - Advogado Nômade',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Obrigado por se cadastrar! 🎉</h2>
          <p>Olá,</p>
          <p>Você acaba de se cadastrar para receber nossas <strong>dicas jurídicas gratuitas</strong>.</p>
          <p>Toda semana você receberá um email com:</p>
          <ul>
            <li>💡 Dicas práticas de direito</li>
            <li>⚖️ Informações sobre leis e regulamentos</li>
            <li>🔍 Insights para proteger seus direitos</li>
          </ul>
          <p><strong>Dr. Reginaldo Oliveira</strong><br>
          OAB/SC 57.879<br>
          Advogado Nômade</p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            Este é um email automático. Se você não se cadastrou, por favor ignore este email.
          </p>
        </div>
      `,
    };

    // Enviar ambos os emails
    await transporter.sendMail(leadEmail);
    await transporter.sendMail(confirmationEmail);

    return NextResponse.json(
      { message: 'Email cadastrado com sucesso!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro ao processar inscrição:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
