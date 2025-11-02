import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email é obrigatório' },
        { status: 400 }
      );
    }

    // Enviar email SIMPLES usando o serviço Resend (mais fácil)
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Advogado Nômade <contato@advogadonomade.com.br>',
        to: ['adv.regi.silva@gmail.com', 'contato@contratosexpresso.com.br'],
        subject: '🎉 Novo Lead - Advogado Nômade',
        html: `
          <h2>Novo Lead Capturado!</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
          <p><strong>Origem:</strong> Site Advogado Nômade</p>
        `,
      }),
    });

    if (response.ok) {
      return NextResponse.json(
        { message: 'Email cadastrado com sucesso!' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Erro ao enviar email' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Erro:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}
