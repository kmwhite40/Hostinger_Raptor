import { PageHero } from '@/components/site/PageHero';
import { Section } from '@/components/site/Section';
import { Reveal } from '@/components/Reveal';

const CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    updated: 'March 9, 2026',
    sections: [
      { h: '1. Introduction', body: ['Raptor Solutions, LLC ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.'] },
      { h: '2. Information We Collect', body: [
        'We may collect information about you in a variety of ways. The information we may collect includes:',
        'Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when choosing to participate in various activities related to the Site.',
        'Derivative Data: Information our servers automatically collect when you access the Site, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Site.',
      ] },
      { h: '3. Use of Your Information', body: [
        'Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:',
        'Respond to customer service requests and provide support.',
        'Compile anonymous statistical data and analysis for use internally.',
        'Deliver targeted advertising, newsletters, and other information regarding promotions.',
      ] },
      { h: '4. Contact Us', body: [
        'If you have questions or comments about this Privacy Policy, please contact us at:',
        'Raptor Solutions, LLC\n3090 N Goliad St, Suite 102 #834\nRockwall, TX 75087\nEmail: info@raptor-ent.com',
      ] },
    ],
  },
  terms: {
    title: 'Terms of Service',
    updated: 'March 9, 2026',
    sections: [
      { h: '1. Agreement to Terms', body: ['By accessing our website and using our services, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.'] },
      { h: '2. Intellectual Property Rights', body: ['Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site are owned or controlled by us.'] },
      { h: '3. User Representations', body: ['By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.'] },
      { h: '4. Prohibited Activities', body: ['You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.'] },
      { h: '5. Modifications and Interruptions', body: ['We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice.'] },
    ],
  },
};

export default function Legal({ doc = 'privacy' }) {
  const data = CONTENT[doc];
  return (
    <>
      <PageHero title={data.title} subtitle={`Last Updated: ${data.updated}`} />
      <Section className="border-b-0">
        <div className="mx-auto max-w-3xl space-y-10">
          {data.sections.map((s, i) => (
            <Reveal key={s.h} delay={i * 0.04}>
              <div>
                <h2 className="text-xl font-semibold">{s.h}</h2>
                <div className="mt-3 space-y-3 text-muted-foreground">
                  {s.body.map((p, j) => (
                    <p key={j} className="whitespace-pre-line leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
