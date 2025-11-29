import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Validation des données
    if (!data.firstName || !data.lastName || !data.email || !data.company || !data.position) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis' },
        { status: 400 }
      );
    }

    // Vérifier si la clé API Resend est configurée
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.error('⚠️ RESEND_API_KEY non configurée. Email non envoyé.');
      console.log('📧 Données du formulaire:', data);
      
      return NextResponse.json({
        success: true,
        message: 'Votre demande a été reçue. Nous vous contacterons bientôt.',
        warning: 'Configuration email en attente'
      });
    }

    // Initialiser Resend
    const resend = new Resend(resendApiKey);

    // Email de destination (configurable via variable d'environnement)
    const recipientEmail = process.env.CONTACT_EMAIL || 'structura.talents@gmail.com';
    
    // Envoi de l'email avec Resend
    const emailResult = await resend.emails.send({
      from: 'QUAERA AI Contact <onboarding@resend.dev>', // Changez après avoir vérifié votre domaine
      to: recipientEmail,
      subject: `Nouvelle demande de contact - ${data.company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A2540; border-bottom: 3px solid #00BFA6; padding-bottom: 10px;">
            Nouvelle demande de contact - QUAERA AI
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0A2540; margin-top: 0;">Informations du contact :</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold;">Prénom :</td>
                <td style="padding: 10px;">${data.firstName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold;">Nom :</td>
                <td style="padding: 10px;">${data.lastName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold;">Email :</td>
                <td style="padding: 10px;"><a href="mailto:${data.email}" style="color: #00BFA6;">${data.email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold;">Téléphone :</td>
                <td style="padding: 10px;">${data.phone || 'Non renseigné'}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold;">Entreprise :</td>
                <td style="padding: 10px;">${data.company}</td>
              </tr>
              <tr style="border-bottom: 1px solid #ddd;">
                <td style="padding: 10px; font-weight: bold;">Poste :</td>
                <td style="padding: 10px;">${data.position}</td>
              </tr>
            </table>
          </div>
          
          ${data.message ? `
            <div style="margin: 20px 0;">
              <h3 style="color: #0A2540;">Message :</h3>
              <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #00BFA6; border-radius: 4px;">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
            </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Email envoyé depuis le formulaire de contact de <a href="https://quaera.ai" style="color: #00BFA6;">quaera.ai</a></p>
            <p>Date : ${new Date().toLocaleString('fr-FR')}</p>
          </div>
        </div>
      `,
      // Version texte
      text: `
Nouvelle demande de contact depuis QUAERA AI

Informations du contact :
------------------------
Prénom : ${data.firstName}
Nom : ${data.lastName}
Email : ${data.email}
Téléphone : ${data.phone || 'Non renseigné'}
Entreprise : ${data.company}
Poste : ${data.position}

Message :
${data.message || 'Aucun message'}

------------------------
Date : ${new Date().toLocaleString('fr-FR')}
      `.trim()
    });

    console.log('✅ Email envoyé avec succès:', emailResult);

    return NextResponse.json({
      success: true,
      message: 'Votre demande a été reçue. Nous vous contacterons bientôt.',
      emailId: emailResult.data?.id
    });

  } catch (error) {
    console.error('❌ Erreur lors du traitement du formulaire:', error);
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du formulaire' },
      { status: 500 }
    );
  }
}
