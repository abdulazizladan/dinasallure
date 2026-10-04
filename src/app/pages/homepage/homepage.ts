import { Component } from '@angular/core';

interface Shade {
  name: string;
  shade: string;
  note: string;
  image: string;
  // Sampled from the product photos
  colour: string;
  bestSeller?: boolean;
}

interface CareProduct {
  name: string;
  category: string;
  // PLACEHOLDER copy — confirm ingredients against the real formulas
  description: string;
}

@Component({
  selector: 'app-homepage',
  standalone: false,
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  protected readonly shades: Shade[] = [
    { name: 'Allure', shade: 'Dark purple', note: 'Our signature. Deep, moody, made for evenings.', image: 'products/lipgloss/allure.jpeg', colour: '#3E2226', bestSeller: true },
    { name: 'Mine', shade: 'Pink', note: 'A berry-pink that flatters every skin tone.', image: 'products/lipgloss/mine.jpeg', colour: '#8A2A45' },
    { name: 'Lick-Lips', shade: 'Peach', note: 'Soft, warm peach for sunny days.', image: 'products/lipgloss/lick-lips.jpeg', colour: '#E07A6E' },
    { name: 'Amore', shade: 'Dark pink', note: 'A rich, deep shade with a glassy finish.', image: 'products/lipgloss/amore.jpeg', colour: '#5A1A20' },
    { name: 'Juicy', shade: 'Clear', note: 'Pure shine over any colour, or on its own.', image: 'products/lipgloss/juicy.jpeg', colour: '#F4EEF0' },
  ];

  protected readonly careProducts: CareProduct[] = [
    { name: 'Facial Mask', category: 'Skincare', description: 'A gentle weekly reset that leaves skin calm and soft.' },
    { name: 'Body Scrub', category: 'Body care', description: 'Buffs away dullness, then melts into a nourishing oil.' },
    { name: 'Body Cream', category: 'Body care', description: 'Rich shea butter cream that sinks in without the grease.' },
    { name: 'Soap', category: 'Body care', description: 'Small-batch bar soap with a creamy, kind-to-skin lather.' },
    { name: 'Hair Cream', category: 'Hair care', description: 'Softens, defines and seals in moisture from root to tip.' },
  ];

  // PLACEHOLDER: confirm these against the real ingredient lists before launch
  protected readonly ingredients = [
    { name: 'Shea butter', icon: 'drop', text: 'Deep, lasting moisture for skin and hair, straight from the nut.' },
    { name: 'Jojoba oil', icon: 'oil', text: 'Light and close to skin’s own oils, so it absorbs without residue.' },
    { name: 'Botanical extracts', icon: 'leaf', text: 'Plant actives chosen for what they do, not how they sound.' },
  ];

  // PLACEHOLDER: replace with the exclusions that are true for every product
  protected readonly leftOut = ['Parabens', 'Mineral oil', 'Synthetic dyes', 'Harsh sulfates'];

  // PLACEHOLDER: sample testimonials — replace with real customer reviews before going live
  protected readonly testimonials = [
    { quote: 'Allure is the only gloss I reach for now. The colour is gorgeous and my lips never feel sticky.', name: 'Customer name' },
    { quote: 'The body scrub made my skin so soft. You can tell it’s made with care.', name: 'Customer name' },
    { quote: 'I love that I can ask Dina anything about what’s inside. That honesty is rare.', name: 'Customer name' },
  ];

  protected readonly stars = [1, 2, 3, 4, 5];
}
