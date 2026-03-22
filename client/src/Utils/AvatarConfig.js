import avatarSchema from './AvatarSchema';

export const AVATAR_OPTIONS = {
    top: avatarSchema.top.items.enum,
    hairColor: avatarSchema.hairColor.default,
    clothes: avatarSchema.clothing.items.enum,
    clothesColor: avatarSchema.clothesColor.default,
    eyes: avatarSchema.eyes.items.enum,
    eyebrow: avatarSchema.eyebrows.items.enum,
    mouth: avatarSchema.mouth.items.enum,
    skin: avatarSchema.skinColor.default,
};

// lengths derived automatically
export const AVATAR_LENGTHS = Object.fromEntries(
    Object.entries(AVATAR_OPTIONS).map(([key, arr]) => [key, arr.length])
);