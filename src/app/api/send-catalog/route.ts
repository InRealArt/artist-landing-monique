import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/actions/emailActions';

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Nom et email sont requis' },
        { status: 400 }
      );
    }

    // Email template for catalog request
    const emailData = {
      to: email,
      subject: 'Votre Catalogue InRealArt 2025',
      html: `
        <div style="font-family: 'Montserrat', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #333; font-size: 24px; margin-bottom: 20px; text-align: center;">
              Catalogue InRealArt 2025
            </h1>
            
            <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Bonjour ${name},
            </p>
            
            <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Merci pour votre intérêt pour notre catalogue InRealArt 2025. 
              Vous trouverez ci-joint le catalogue complet avec les œuvres de nos artistes sélectionnés, 
              dont Monique Laville.
            </p>
            
            <div style="background-color: #f0f0f0; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #333; font-size: 18px; margin-bottom: 10px;">
                À propos d'InRealArt
              </h2>
              <ul style="color: #666; font-size: 14px; line-height: 1.6; margin: 0; padding-left: 20px;">
                <li>15+ Artistes sélectionnés dans notre catalogue global</li>
                <li>&lt; 100 Œuvres soigneusement choisies pour embellir votre collection</li>
                <li>500+ Transactions réalisées sur notre marketplace</li>
                <li>50% de nos artistes figurent dans le classement 50-60 de l'ICAC</li>
              </ul>
            </div>
            
            <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              N'hésitez pas à nous contacter si vous avez des questions sur nos œuvres ou nos artistes.
            </p>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                Équipe InRealArt<br>
                contact@inrealart.com
              </p>
            </div>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: 'IRA-catalog-2025-FR.pdf',
          path: './public/IRA-catalog-2025-FR.pdf'
        }
      ]
    };

    // Send email with catalog attachment
    await sendEmail(emailData);

    return NextResponse.json(
      { message: 'Catalogue envoyé avec succès' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending catalog email:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du catalogue' },
      { status: 500 }
    );
  }
}
