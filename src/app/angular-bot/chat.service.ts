import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable()
export class ChatService {
  constructor() {}
  
  conversation = new Subject<Message[]>();
  
  messageMap = {
    "Hi": "Hello, I am a bot and here to help you with home remedy, Please tell me your problem",
    "hi": "Hello, I am a bot and here to help you with home remedy, Please tell me your problem",
    "hey": "Hello, I am a bot and here to help you with home remedy, Please tell me your problem",
    "Hey": "Hello, I am a bot and here to help you with home remedy, Please tell me your problem",
    "Howdyy": "Hello, I am a bot and here to help you with home remedy, Please tell me your problem",
    "Hello": "Hello, I am a bot and here to help you with home remedy, Please tell me your problem",
    "hello": "Hello, I am a bot and here to help you with home remedy, Please tell me your problem",
    "I am not feeling well": "OMG, Can you be more precise?",
    "I am not well": "OMG, Can you be more precise?",
    "not well": "OMG, Can you be more precise?",
    "cold": "Stay hydrated. Water, juice, clear broth or warm lemon water with honey helps loosen congestion and prevents dehydration or Do you like to book a doctor appointment",
    "Cold": "Stay hydrated. Water, juice, clear broth or warm lemon water with honey helps loosen congestion and prevents dehydration or Do you like to book a doctor appointment",
    "I have Cold": "Stay hydrated. Water, juice, clear broth or warm lemon water with honey helps loosen congestion and prevents dehydration or Do you like to book a doctor appointment",
    "I have cold": "Stay hydrated. Water, juice, clear broth or warm lemon water with honey helps loosen congestion and prevents dehydration.",
    "I am having Fever": "Elderflowers, catnip (gentle choice for children), yarrow, white willow bark, Echinacea, and lemon balm are all known to assist in the treatment of fevers. Lemon juice and raw honey can be added to the tea for an extra boost of vitamin C (but never give honey to a child under one year of age",
    "fever": "Elderflowers, catnip (gentle choice for children), yarrow, white willow bark, Echinacea, and lemon balm are all known to assist in the treatment of fevers. Lemon juice and raw honey can be added to the tea for an extra boost of vitamin C (but never give honey to a child under one year of age",
    "Fever": "Elderflowers, catnip (gentle choice for children), yarrow, white willow bark, Echinacea, and lemon balm are all known to assist in the treatment of fevers. Lemon juice and raw honey can be added to the tea for an extra boost of vitamin C (but never give honey to a child under one year of age",
       "I am having fever": "Elderflowers, catnip (gentle choice for children), yarrow, white willow bark, Echinacea, and lemon balm are all known to assist in the treatment of fevers. Lemon juice and raw honey can be added to the tea for an extra boost of vitamin C or Do you like to book a doctor appointment?",
    "I am having a Fever": "Elderflowers, catnip (gentle choice for children), yarrow, white willow bark, Echinacea, and lemon balm are all known to assist in the treatment of fevers. Lemon juice and raw honey can be added to the tea for an extra boost of vitamin C or Do you like to book a doctor appointment?",
    "I have fever": "Elderflowers, catnip (gentle choice for children), yarrow, white willow bark, Echinacea, and lemon balm are all known to assist in the treatment of fevers. Lemon juice and raw honey can be added to the tea for an extra boost of vitamin C or Do you like to book a doctor appointment?",
    "Having cold": "Elderflowers, catnip (gentle choice for children), yarrow, white willow bark, Echinacea, and lemon balm are all known to assist in the treatment of fevers. Lemon juice and raw honey can be added to the tea for an extra boost of vitamin C or Do you like to book a doctor appointment?",
    "cough":"Use a humidifier to make the air moist, or breathe steam from a hot shower or teakettle before bed.Raise your head up a bit with an extra pillow.Swallow a teaspoon of honey.Sip warm tea or soup or Do you like to book a doctor appointment?",
    "Cough":"Use a humidifier to make the air moist, or breathe steam from a hot shower or teakettle before bed.Raise your head up a bit with an extra pillow.Swallow a teaspoon of honey.Sip warm tea or soup or Do you like to book a doctor appointment?",
    "I am having cough":"Use a humidifier to make the air moist, or breathe steam from a hot shower or teakettle before bed.Raise your head up a bit with an extra pillow.Swallow a teaspoon of honey.Sip warm tea or soup or Do you like to book a doctor appointment?",
    "I am having a Cough":"Use a humidifier to make the air moist, or breathe steam from a hot shower or teakettle before bed.Raise your head up a bit with an extra pillow.Swallow a teaspoon of honey.Sip warm tea or soup or Do you like to book a doctor appointment?",
    "I have a cough":"Use a humidifier to make the air moist, or breathe steam from a hot shower or teakettle before bed.Raise your head up a bit with an extra pillow.Swallow a teaspoon of honey.Sip warm tea or soup or Do you like to book a doctor appointment?",
    "I have a ` Cough":"Use a humidifier to make the air moist, or breathe steam from a hot shower or teakettle before bed.Raise your head up a bit with an extra pillow.Swallow a teaspoon of honey.Sip warm tea or soup or Do you like to book a doctor appointment?",
    "I having cough":"Use a humidifier to make the air moist, or breathe steam from a hot shower or teakettle before bed.Raise your head up a bit with an extra pillow.Swallow a teaspoon of honey.Sip warm tea or soup or Do you like to book a doctor appointment?",
    "I having Cough":"Use a humidifier to make the air moist, or breathe steam from a hot shower or teakettle before bed.Raise your head up a bit with an extra pillow.Swallow a teaspoon of honey.Sip warm tea or soup or Do you like to book a doctor appointment?",
    "stomachpain": "Eat less food.Take small amounts of baking soda.Use lemon and/or lime juice.Start a BRAT diet (banana, rice, applesauce and toast) for a day or so for symptom relief.Don't smoke or drink alcohol or Do you like to book a doctor appointment?",
    "Stomachpain": "Eat less food.Take small amounts of baking soda.Use lemon and/or lime juice.Start a BRAT diet (banana, rice, applesauce and toast) for a day or so for symptom relief.Don't smoke or drink alcohol or Do you like to book a doctor appointment?",
    "stomach pain": "Eat less food.Take small amounts of baking soda.Use lemon and/or lime juice.Start a BRAT diet (banana, rice, applesauce and toast) for a day or so for symptom relief.Don't smoke or drink alcohol or Do you like to book a doctor appointment?",
    "Stomach pain": "Eat less food.Take small amounts of baking soda.Use lemon and/or lime juice.Start a BRAT diet (banana, rice, applesauce and toast) for a day or so for symptom relief.Don't smoke or drink alcohol or Do you like to book a doctor appointment?",
    "stomachache": "Eat less food.Take small amounts of baking soda.Use lemon and/or lime juice.Start a BRAT diet (banana, rice, applesauce and toast) for a day or so for symptom relief.Don't smoke or drink alcohol or Do you like to book a doctor appointment?",
    "Stomachache": "Eat less food.Take small amounts of baking soda.Use lemon and/or lime juice.Start a BRAT diet (banana, rice, applesauce and toast) for a day or so for symptom relief.Don't smoke or drink alcohol or Do you like to book a doctor appointment?",
    "stomach ache": "Eat less food.Take small amounts of baking soda.Use lemon and/or lime juice.Start a BRAT diet (banana, rice, applesauce and toast) for a day or so for symptom relief.Don't smoke or drink alcohol or Do you like to book a doctor appointment?",
    "Stomach ache": "Eat less food.Take small amounts of baking soda.Use lemon and/or lime juice.Start a BRAT diet (banana, rice, applesauce and toast) for a day or so for symptom relief.Don't smoke or drink alcohol or Do you like to book a doctor appointment?",
    "I am having stomach ache": "Eat less food.Take small amounts of baking soda.Use lemon and/or lime juice.Start a BRAT diet (banana, rice, applesauce and toast) for a day or so for symptom relief.Don't smoke or drink alcohol or Do you like to book a doctor appointment?",
    "I am having a Stomach ache": "Eat less food.Take small amounts of baking soda.Use lemon and/or lime juice.Start a BRAT diet (banana, rice, applesauce and toast) for a day or so for symptom relief.Don't smoke or drink alcohol or Do you like to book a doctor appointment?",
    "Headache": "Drink Water. Inadequate hydration may lead you to develop a headache.Take Some Magnesium.Limit Alcohol.Get Adequate Sleep.Avoid Foods High in Histamine.Use Essential Oils.Try a B-Complex Vitamin.Soothe Pain with a Cold Compress or Do you like to book a doctor appointment?",
    "Head ache": "Drink Water. Inadequate hydration may lead you to develop a headache.Take Some Magnesium.Limit Alcohol.Get Adequate Sleep.Avoid Foods High in Histamine.Use Essential Oils.Try a B-Complex Vitamin.Soothe Pain with a Cold Compress or Do you like to book a doctor appointment?",
    "headache": "Drink Water. Inadequate hydration may lead you to develop a headache.Take Some Magnesium.Limit Alcohol.Get Adequate Sleep.Avoid Foods High in Histamine.Use Essential Oils.Try a B-Complex Vitamin.Soothe Pain with a Cold Compress or Do you like to book a doctor appointment?",
    "head ache": "Drink Water. Inadequate hydration may lead you to develop a headache.Take Some Magnesium.Limit Alcohol.Get Adequate Sleep.Avoid Foods High in Histamine.Use Essential Oils.Try a B-Complex Vitamin.Soothe Pain with a Cold Compress or Do you like to book a doctor appointment?",
    "I am having a headache": "Drink Water. Inadequate hydration may lead you to develop a headache.Take Some Magnesium.Limit Alcohol.Get Adequate Sleep.Avoid Foods High in Histamine.Use Essential Oils.Try a B-Complex Vitamin.Soothe Pain with a Cold Compress or Do you like to book a doctor appointment?",
    "I am having a Headache": "Drink Water. Inadequate hydration may lead you to develop a headache.Take Some Magnesium.Limit Alcohol.Get Adequate Sleep.Avoid Foods High in Histamine.Use Essential Oils.Try a B-Complex Vitamin.Soothe Pain with a Cold Compress or Do you like to book a doctor appointment?",
    "I have a headache": "Drink Water. Inadequate hydration may lead you to develop a headache.Take Some Magnesium.Limit Alcohol.Get Adequate Sleep.Avoid Foods High in Histamine.Use Essential Oils.Try a B-Complex Vitamin.Soothe Pain with a Cold Compress or Do you like to book a doctor appointment?",
    "I have a Headache": "Drink Water. Inadequate hydration may lead you to develop a headache.Take Some Magnesium.Limit Alcohol.Get Adequate Sleep.Avoid Foods High in Histamine.Use Essential Oils.Try a B-Complex Vitamin.Soothe Pain with a Cold Compress or Do you like to book a doctor appointment?",
    "I got Headache": "Drink Water. Inadequate hydration may lead you to develop a headache.Take Some Magnesium.Limit Alcohol.Get Adequate Sleep.Avoid Foods High in Histamine.Use Essential Oils.Try a B-Complex Vitamin.Soothe Pain with a Cold Compress or Do you like to book a doctor appointment?",
    "I got headache": "Drink Water. Inadequate hydration may lead you to develop a headache.Take Some Magnesium.Limit Alcohol.Get Adequate Sleep.Avoid Foods High in Histamine.Use Essential Oils.Try a B-Complex Vitamin.Soothe Pain with a Cold Compress or Do you like to book a doctor appointment?",
    "Throatpain": "Warm liquids — broth, caffeine-free tea or warm water with honey — and cold treats such as ice pops can soothe a sore throat. Gargle with saltwater. A saltwater gargle of 1/4 to 1/2 teaspoon (1.25 to 2.50 milliliters) of table salt to 4 to 8 ounces (120 to 240 milliliters) of warm water can help soothe a sore throat. or Do you like to book a doctor appointment?",
    "throatpain": "Warm liquids — broth, caffeine-free tea or warm water with honey — and cold treats such as ice pops can soothe a sore throat. Gargle with saltwater. A saltwater gargle of 1/4 to 1/2 teaspoon (1.25 to 2.50 milliliters) of table salt to 4 to 8 ounces (120 to 240 milliliters) of warm water can help soothe a sore throat. or Do you like to book a doctor appointment?",
    "throat pain": "Warm liquids — broth, caffeine-free tea or warm water with honey — and cold treats such as ice pops can soothe a sore throat. Gargle with saltwater. A saltwater gargle of 1/4 to 1/2 teaspoon (1.25 to 2.50 milliliters) of table salt to 4 to 8 ounces (120 to 240 milliliters) of warm water can help soothe a sore throat. or Do you like to book a doctor appointment?",
    "Throat pain": "Warm liquids — broth, caffeine-free tea or warm water with honey — and cold treats such as ice pops can soothe a sore throat. Gargle with saltwater. A saltwater gargle of 1/4 to 1/2 teaspoon (1.25 to 2.50 milliliters) of table salt to 4 to 8 ounces (120 to 240 milliliters) of warm water can help soothe a sore throat. or Do you like to book a doctor appointment?",
    "I have a throatpain": "Warm liquids — broth, caffeine-free tea or warm water with honey — and cold treats such as ice pops can soothe a sore throat. Gargle with saltwater. A saltwater gargle of 1/4 to 1/2 teaspoon (1.25 to 2.50 milliliters) of table salt to 4 to 8 ounces (120 to 240 milliliters) of warm water can help soothe a sore throat. or Do you like to book a doctor appointment?",
    "I have a Throatpain": "Warm liquids — broth, caffeine-free tea or warm water with honey — and cold treats such as ice pops can soothe a sore throat. Gargle with saltwater. A saltwater gargle of 1/4 to 1/2 teaspoon (1.25 to 2.50 milliliters) of table salt to 4 to 8 ounces (120 to 240 milliliters) of warm water can help soothe a sore throat. or Do you like to book a doctor appointment?",
    "I am having a throatpain": "Warm liquids — broth, caffeine-free tea or warm water with honey — and cold treats such as ice pops can soothe a sore throat. Gargle with saltwater. A saltwater gargle of 1/4 to 1/2 teaspoon (1.25 to 2.50 milliliters) of table salt to 4 to 8 ounces (120 to 240 milliliters) of warm water can help soothe a sore throat. or Do you like to book a doctor appointment?",
    "I am having a Throatpain": "Warm liquids — broth, caffeine-free tea or warm water with honey — and cold treats such as ice pops can soothe a sore throat. Gargle with saltwater. A saltwater gargle of 1/4 to 1/2 teaspoon (1.25 to 2.50 milliliters) of table salt to 4 to 8 ounces (120 to 240 milliliters) of warm water can help soothe a sore throat. or Do you like to book a doctor appointment?",
    "I have a throat pain": "Warm liquids — broth, caffeine-free tea or warm water with honey — and cold treats such as ice pops can soothe a sore throat. Gargle with saltwater. A saltwater gargle of 1/4 to 1/2 teaspoon (1.25 to 2.50 milliliters) of table salt to 4 to 8 ounces (120 to 240 milliliters) of warm water can help soothe a sore throat. or Do you like to book a doctor appointment?",
    "I have a Throat pain": "Warm liquids — broth, caffeine-free tea or warm water with honey — and cold treats such as ice pops can soothe a sore throat. Gargle with saltwater. A saltwater gargle of 1/4 to 1/2 teaspoon (1.25 to 2.50 milliliters) of table salt to 4 to 8 ounces (120 to 240 milliliters) of warm water can help soothe a sore throat. or Do you like to book a doctor appointment?",
    "I am having a Throat pain": "Warm liquids — broth, caffeine-free tea or warm water with honey — and cold treats such as ice pops can soothe a sore throat. Gargle with saltwater. A saltwater gargle of 1/4 to 1/2 teaspoon (1.25 to 2.50 milliliters) of table salt to 4 to 8 ounces (120 to 240 milliliters) of warm water can help soothe a sore throat. or Do you like to book a doctor appointment?",
    "I am having a throat pain": "Warm liquids — broth, caffeine-free tea or warm water with honey — and cold treats such as ice pops can soothe a sore throat. Gargle with saltwater. A saltwater gargle of 1/4 to 1/2 teaspoon (1.25 to 2.50 milliliters) of table salt to 4 to 8 ounces (120 to 240 milliliters) of warm water can help soothe a sore throat. or Do you like to book a doctor appointment?",
    "mouthulcer": "Using a rinse of saltwater and baking soda.placing milk of magnesia on the mouth ulcer.covering mouth ulcers with baking soda paste.using over-the-counter benzocaine (topical anesthetic) products like Orajel or Anbesol.applying ice to canker sores or do you like o book a doctor appointment?",
    "Mouthulcer": "Using a rinse of saltwater and baking soda.placing milk of magnesia on the mouth ulcer.covering mouth ulcers with baking soda paste.using over-the-counter benzocaine (topical anesthetic) products like Orajel or Anbesol.applying ice to canker sores or do you like o book a doctor appointment?",
    "mouth ulcer": "Using a rinse of saltwater and baking soda.placing milk of magnesia on the mouth ulcer.covering mouth ulcers with baking soda paste.using over-the-counter benzocaine (topical anesthetic) products like Orajel or Anbesol.applying ice to canker sores or do you like o book a doctor appointment?",
    "Mouth ulcer": "Using a rinse of saltwater and baking soda.placing milk of magnesia on the mouth ulcer.covering mouth ulcers with baking soda paste.using over-the-counter benzocaine (topical anesthetic) products like Orajel or Anbesol.applying ice to canker sores or do you like o book a doctor appointment?",
    "I have a mouthulcer": "Using a rinse of saltwater and baking soda.placing milk of magnesia on the mouth ulcer.covering mouth ulcers with baking soda paste.using over-the-counter benzocaine (topical anesthetic) products like Orajel or Anbesol.applying ice to canker sores or do you like o book a doctor appointment?",
    "I have a Mouthulcer": "Using a rinse of saltwater and baking soda.placing milk of magnesia on the mouth ulcer.covering mouth ulcers with baking soda paste.using over-the-counter benzocaine (topical anesthetic) products like Orajel or Anbesol.applying ice to canker sores or do you like o book a doctor appointment?",
    "I am having a mouthulcer": "Using a rinse of saltwater and baking soda.placing milk of magnesia on the mouth ulcer.covering mouth ulcers with baking soda paste.using over-the-counter benzocaine (topical anesthetic) products like Orajel or Anbesol.applying ice to canker sores or do you like o book a doctor appointment?",
    "I m having a Mouth ulcer": "Using a rinse of saltwater and baking soda.placing milk of magnesia on the mouth ulcer.covering mouth ulcers with baking soda paste.using over-the-counter benzocaine (topical anesthetic) products like Orajel or Anbesol.applying ice to canker sores or do you like o book a doctor appointment?",
    "I am having a Mouthulcer": "Using a rinse of saltwater and baking soda.placing milk of magnesia on the mouth ulcer.covering mouth ulcers with baking soda paste.using over-the-counter benzocaine (topical anesthetic) products like Orajel or Anbesol.applying ice to canker sores or do you like o book a doctor appointment?",
    "I am having a mouth ulcer": "Using a rinse of saltwater and baking soda.placing milk of magnesia on the mouth ulcer.covering mouth ulcers with baking soda paste.using over-the-counter benzocaine (topical anesthetic) products like Orajel or Anbesol.applying ice to canker sores or do you like o book a doctor appointment?",
    "Yes": "Book an appointment",
    "yes": "Book an appointment",
    "Yeah": "Book an appointment",
    "yeah": "Book an appointment",
    "No": "Cool, see you later",
    "no": "Cook, see you later",
    "default": "I can't understand. Can you please repeat"
  }

  getBotAnswer(msg: string) {
    const userMessage = new Message('user', msg);  
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot', this.getBotMessage(msg));
    
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    }, 1500);
  }

  getBotMessage(question: string){
    let answer = this.messageMap[question];
    return answer || this.messageMap['default'];
  }
}