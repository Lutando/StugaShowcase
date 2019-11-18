import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Header from '../components/Header';
import Block from '~/src/components/Block';
import Figure from '~/src/components/Figure';
import SEO from '~/src/components/SEO';
import clients from '~/static/clients.svg';

export default ({ posts, transition, data }) => (
  <div style={transition ? transition.style : { opacity: 0 }}>
    <Helmet title="Störberg | Ängstugan" />
    <SEO
      postPath="/angstuga"
      postNode={{
        subtitle: 'Ängstugan',
        excerpt: `Ängstugan! Löksås ipsum varit räv rännil så icke tidigare dimma, genom är samtidigt av blev inom groda stora, fram smultron kan som år stig annan.`,
        cover: data.cover,
      }}
      pageSEO
    />
    <Header cover={data.cover}>
      <div className="title">
        <h1>Ängstugan</h1>
      </div>
      <div className="intro">
        <ul>
          <li>Professional early adopter.</li>
          <li>Open Source on default.</li>
          <li>Indecisive about his job title.</li>
        </ul>
      </div>
    </Header>
    <article id="content">
      <div>
        <Block pull mobilePull>
          <Figure
            src={clients}
            captionLeft
            caption="Some of the companies I’ve worked with."
          />
        </Block>
        <Block align="right" pull mobilePull>
          <p>
            Tid flera björnbär! Göras där år helt träutensilierna söka och samtidigt, 
            kunde därmed åker stora i där när, gamla om lax ännu äng ser. 
            Sig bäckasiner björnbär och för att dock för har, tre när söka brunsås vi vad bäckasiner
          </p>
          <p>
            verkligen kom åker smultron sjö tre bäckasiner.Hav del kunde hwila se varit därmed år att redan, 
            samtidigt upprätthållande sin i blev vad kom händer dock, omfångsrik söka samtidigt enligt dock dimmhöljd för enligt.
          </p>
          <p>
            Icke sjö se vemod ordningens ska flera samma del bland, både dunge bra sig helt stora söka händer. 
            Fram bra ordningens har tre sig när ordningens varit, jäst miljoner trevnadens mot och precis inom gör,
          </p>
        </Block>
      </div>
    </article>
  </div>
);

export const query = graphql`
  query GatsbyImageHeroAngstugaQuery {
    cover: file(relativePath: { eq: "angstuga-1.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 700, quality: 90) {
          ...GatsbyImageSharpSizes_withWebp
        }
      }
    }
  }
`;