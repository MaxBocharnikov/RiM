import { useState } from 'react';

import { CheckIcon, classNames, CloseIcon, EditIcon, Input, Select, StatusDot } from '../../_shared';

import styles from './CharacterCard.module.scss';

export type CharacterStatus = 'alive' | 'dead' | 'unknown';

export interface Character {
  image: string;
  name: string;
  gender: string;
  species: string;
  location: string;
  status: CharacterStatus;
}

const STATUS_OPTIONS = [
  { label: 'Alive', value: 'alive', decorationSlot: <StatusDot status='alive' /> },
  { label: 'Dead', value: 'dead', decorationSlot: <StatusDot status='dead' /> },
  { label: 'Unknown', value: 'unknown', decorationSlot: <StatusDot status='unknown' /> }
] satisfies { label: string; value: CharacterStatus; decorationSlot: React.ReactNode }[];

type Props = {
  character: Character;
  onSave?: (next: Character) => void;
};

export const CharacterCard = (props: Props) => {
  const { character, onSave } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<Character>(character);

  const startEditing = () => {
    setDraft(character);
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  const confirmEditing = () => {
    onSave?.(draft);
    setIsEditing(false);
  };

  const updateField = <K extends keyof Character>(key: K, value: Character[K]) => {
    setDraft((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div
      className={classNames(styles.character_card, {
        [styles.character_card_editing]: isEditing
      })}
    >
      <img
        className={styles.character_card_image}
        src={character.image}
        alt={character.name}
      />

      <div className={styles.character_card_body}>
        <div className={styles.character_card_header}>
          {isEditing ? (
            <div className={styles.character_card_name_field}>
              <Input
                variant='underline'
                label='Name'
                value={draft.name}
                onClear={() => updateField('name', '')}
                onChange={(value) => updateField('name', value)}
              />
            </div>
          ) : (
            <h3 className={styles.character_card_name}>{character.name}</h3>
          )}

          <div className={styles.character_card_actions}>
            {isEditing ? (
              <>
                <button
                  type='button'
                  className={classNames(styles.character_card_action, styles.character_card_action_cancel)}
                  aria-label='Cancel'
                  onClick={cancelEditing}
                >
                  <CloseIcon size={10} />
                </button>
                <button
                  type='button'
                  className={styles.character_card_action}
                  aria-label='Save'
                  onClick={confirmEditing}
                >
                  <CheckIcon size={24} />
                </button>
              </>
            ) : (
              <button
                type='button'
                className={styles.character_card_action}
                aria-label='Edit'
                onClick={startEditing}
              >
                <EditIcon />
              </button>
            )}
          </div>
        </div>

        <div className={styles.character_card_field}>
          <span className={styles.character_card_label}>Gender</span>
          <span className={styles.character_card_value}>{character.gender}</span>
        </div>

        <div className={styles.character_card_field}>
          <span className={styles.character_card_label}>Species</span>
          <span className={styles.character_card_value}>{character.species}</span>
        </div>

        <div className={styles.character_card_field}>
          <span className={styles.character_card_label}>Location</span>
          {isEditing ? (
            <div className={styles.character_card_control}>
              <Input
                variant='underline'
                label='Location'
                value={draft.location}
                autoWidth
                onClear={() => updateField('location', '')}
                onChange={(value) => updateField('location', value)}
              />
            </div>
          ) : (
            <span className={styles.character_card_value}>{character.location}</span>
          )}
        </div>

        <div className={styles.character_card_field}>
          <span className={styles.character_card_label}>Status</span>
          {isEditing ? (
            <div className={styles.character_card_control}>
              <Select<CharacterStatus>
                size='small'
                value={draft.status}
                onChange={(value) => value && updateField('status', value)}
                options={STATUS_OPTIONS}
              />
            </div>
          ) : (
            <span className={classNames(styles.character_card_value, styles.character_card_value_status)}>
              {character.status.charAt(0).toUpperCase() + character.status.slice(1)}
              <StatusDot status={character.status} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
