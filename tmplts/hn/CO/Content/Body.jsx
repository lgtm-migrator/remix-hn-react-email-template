import React from 'react';

import { 
  MainTitle, 
  Heading, Strong, Paragraph, 
  // Separator, 
  Divider 
} from "react-email-components-typography"

import { Image } from "react-emails-components-miscellaneous";

// pass images as an array that you can attack later
const Body = () => {  

  return (
    <>
      <MainTitle>
        Can We Make Data Tidy?
      </MainTitle>

      <Paragraph>
          Imagine: You are going to sit down with a newly-fetched data set,
        excited about the insights it will bring you and then you find out it is no use.
        If you’ve been there, then you know for sure what an untidy dataset is.
      </Paragraph>

      <Image
        href="#"
        src="https://placekitten.com/g/220/220"
        alt="GIF"        
      />
      {' '}
      I
      <Divider />

      <Paragraph>
          A statistician from New Zealand once said: Tidy datasets are all alike, but every messy dataset
        is messy in its own way. Indeed, as data may come in various forms and shapes, sometimes we are
        inundated with it. As a result, our data science team becomes shortsighted and oops..
        disillusioned by mountains of unworkable data. The only way data specialists can facilitate analysis is
        by keeping data clean and organized.
      </Paragraph>

      <Heading>
        <Strong>What is tidy data?</Strong>
      </Heading>

      <Paragraph>
        Essentially, tidy data is a term coined by Hadley Wickham in his Tidy Data paper (remember that
          statistician from NZ?).
          He defined tidy data as data that is neatly organized and all set for analysis. This way of organizing
          allows you to easily produce charts,
          diagrams, and summary statistics. As it often happens, not all data comes out of the database clean,
          therefore cleansing it is essential
          to efficiently analyze it.
      </Paragraph>

      <Image
        href="#"
        src="https://placekitten.com/g/220/220"
      />

      <Divider />
      <Paragraph>
        Without further ado, let us break down the principles that allow you keep your data nice and clean.
      </Paragraph>

      <Heading>
        <Strong>Tidy Data Principles</Strong>
      </Heading>

      <Heading>
        <Strong>1. Each row is an observational unit.</Strong>
      </Heading>

      <Image href="#" src="https://placekitten.com/g/220/220" />

      <Divider />

      <Paragraph>
          We’ll start with one of the basic principles. When you are giving your data the once-over, you should
        make sure each row contains an observation.
        By definition, observation is the individual unit under question. If we look at the table above, an
        observational unit could be called ‘people’.
        You can see that each person has an individual row on the table and all of the information for that
        person is in the same row.
        Observations are included in rows, variables are represented as columns and there is only one
        observational unit per table. Now THIS is tidy data.
      </Paragraph>
      <Divider />
    </>
  );
};

export default Body;
