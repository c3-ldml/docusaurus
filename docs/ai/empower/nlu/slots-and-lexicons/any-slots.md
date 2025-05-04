---
title: "Any Slots" 
slug: "any-slots" 
hidden: false 
---

# Any Slots

:::danger[End of Support]

  The Any Slots feature has been removed in version 4.84. Instead, use the [LLM Entity Extraction](../../../build/node-reference/other-nodes/llm-entity-extract.md) Node to identify Slots in the user input via LLMs.

  *Any Slots* are catch-all placeholder Slots that allow you to match keyphrases of arbitrary length outside your Lexicons. If user input matches the placeholder Slot exactly, it will populate a [Cognigy Slot](slots.md) with the matched content. The result is the same as if the matched user input has been added to an attached Lexicon as a keyphrase.

  To add an Any Slot, annotate a single word in your example sentence and select the **Any-Slot** type. Then enter the desired Slot name.

  An example sentence with the `movie_title` Any Slot:

:::


<img src={require('../../../../../static/img/_assets/ai/empower/nlu/any-slots.png').default} width="60%" />

Add user input that matches the pattern exactly to the Slot `movie_title`:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/result_movie_title.png').default} width="60%" />

Any input content that exactly matches the pattern of an Any Slot in your example sentences will be populated as a new Cognigy Slot. The result will be the same as if you had populated a Lexicon with the tag of your placeholder Any Slot and a keyphrase identical to the matched user input.

## Limitations

- Works best when only a single word is annotated.
- Up to 4 different Any Slots per sentence.
- Up to 500 example sentences with Any Slots per Flow.
- Example sentences with Any Slots must be less than 400 characters long.
- Any Slot patterns are interpreted as exact matches and will always trigger a score of 1 on the intent. Lexicon synonyms or [Annotations](../intents/annotations.md) are treated as synonymous for the purpose of matching.

## Examples

### Any Slot at the End of a Sentence

Consider the following example:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/slots-and-lexicons/any-slot-example.png').default} width="60%" />

This will dynamically add user input that matches the pattern exactly to the Slot *fruit*:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/slots-and-lexicons/result-apple.png').default} width="60%" />

Note that because the Any Slot annotation is located at the very end of the training sentence, any number of words after *"This is a"* will be matched to the slot *fruit*:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/slots-and-lexicons/result-apple-tree.png').default} width="60%" />

This is by design and does not seem to make sense for this specific example. However, consider the example above with the sentence `Who is the director of Titanic`, where the Any Slot would be matched with any movie title, also titles including spaces.

### Any Slot in the Middle of a Sentence

Let's fix the issue we discovered above by adjusting the example sentence a little:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/slots-and-lexicons/result-orange-tree.png').default} width="60%" />

We placed the Any Slot annotation in the middle of a sentence. Now, the word of an input sentence that has exactly the structure of the training sentence will be mapped to the Slot *fruit*:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/result_thisisanappletree2.png').default} width="60%" />

Grammatical issues aside, using multiple words does also work:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/result_thisisankiwifruittree.png').default} width="60%" />

### Any Slot in combination with Lexicon Slot

When using Any Slots, we rely on the user to provide the exact wording of the sentence. To remain rather flexible with what the user may say for *Any Slot* to still be detected,
we can make use of a Lexicon Slot.

Let's annotate the example sentence from the previous example with a Lexicon Slot:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/anyslot_lexiconannotated.png').default} width="60%" />

Keep in mind that we also need to create and attach a lexicon to the flow to be able to annotate *Lexicon Slots*:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/anyslot_lexicon.png').default} width="60%" />

As seen in the following examples, the user has more flexibility in wording the sentence:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/result_thisisanorangejuice.png').default} width="60%" />

Grammatical issues aside, using completely different words than from the training sentence does also work:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/result_thisisanpinapplehouse.png').default} width="60%" />

### Punctuation

Any Slots are insensitive to punctuation. This means that any extra or unexpected punctuation in the input sentence will not affect Any Slot mapping.

See the following input with the same training sentence as the previous examples:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/result_punctuation.png').default} width="60%" />

### Any Slots from Past Inputs

Any Slots that were found in earlier sentences are applied to the input object of the current sentence
if that sentence contains those Slots.
The sentence does not need to match an intent or a training sentence.
This approach can help maintain a smooth conversation flow if a topic from earlier in the conversation comes up again.

Let's consider the following training sentences.

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/anyslot_past_slots.png').default} width="60%" />

In the first two inputs, the AI agent detects two corresponding Any Slots in the inputs. However, the third input doesn't contain any word to be mapped to a Slot. The conversation could continue until the topic of apples and tastiness comes up again.

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/result_follow_up.png').default} width="60%" />

## Known Issues

There are some edge cases to Any Slot matching where seemingly odd behaviors occur that are related to the implementation. These edge cases are listed here for completeness, but should in practice not be of concern. 

### No Spaces in Input

An input sentence without spaces will be mapped.

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/result_anyslotwithoutspaces.png').default} width="60%" />

### Excessive Punctuation

Excessive punctuation may cause problems with word mapping.

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/result_excessivepunctuation.png').default} width="60%" />

### Conflicting Training Sentences 

Conflicting training sentences may yield undesired results. Notice the same beginning of both training sentences below. The Any Slot annotation in the second sentence will override that of the first sentence.

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/anyslot_conflicts.png').default} width="60%" />
<img src={require('../../../../../static/img/_assets/ai/empower/nlu/anyslot_result_conflicts.png').default} width="60%" />

Bear in mind that this might also happen when Any Slots are used in combination with Lexicon Slots, System Slots, or other Any Slots. If you are planning to make excessive use of Slot matching in your agent, particular care must be taken to ensure that multiple annotated training sentences of the same or multiple intents will not conflict each other.

This behavior may be adjusted by configuring Any Slot matching on system level for customers using Cognigy on-premises. Two additional options to the default option are available:

| Any Slot Return Mode | Description                                                                                                                                                |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Default              | The behavior described above occurs.                                                                                                                       |
| All                  | All possible Any Slot matches are returned. In the example above, this includes both `fruit` and `car_brand`.                                              |
| Exact                | Only Any Slot matches where the sentence structures exactly match the input sentence's structure are returned. In the example above, this is only `fruit`. |

### Leading and Trailing Spaces

You should take particular care to avoid leading and trailing spaces within Any Slot annotations. They can quickly creep in with a slip of the mouse and cause undesirable Slot mapping results. 

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/4_in.png').default} width="60%" />
<img src={require('../../../../../static/img/_assets/ai/empower/nlu/4_out.png').default} width="60%" />

### Consecutive Any Slot Annotations

Using multiple Any Slot annotations right after each other may cause problems. Make sure to put at least one word or character between two consecutive `Any Slot` annotations.

Incorrect:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/5_wrong_in.png').default} width="60%" />
<img src={require('../../../../../static/img/_assets/ai/empower/nlu/5_wrong_out.png').default} width="60%" />

Correct:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/5_right_in.png').default} width="60%" />
<img src={require('../../../../../static/img/_assets/ai/empower/nlu/5_right_out.png').default} width="60%" />

### Multiple Words as Any Slot Annotations

When using Any Slot annotations, it's best to stick to single-word annotations to avoid unexpected results.
Keep in mind that you can still detect multi-word `Any Slots`, but using multiple words in annotations may limit your ability to detect single-word `Any Slots`.

Incorrect:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/6_wrong_in.png').default} width="60%" />
<img src={require('../../../../../static/img/_assets/ai/empower/nlu/6_wrong_out.png').default} width="60%" />

Correct:

<img src={require('../../../../../static/img/_assets/ai/empower/nlu/5_right_in.png').default} width="60%" />
<img src={require('../../../../../static/img/_assets/ai/empower/nlu/5_right_out.png').default} width="60%" />

## More Information

- [LLM Entity Extraction](../../../build/node-reference/other-nodes/llm-entity-extract.md)