import { useState } from 'react';

import { CheckIcon, classNames, CloseIcon, EditIcon, Input, Select, StatusDot } from '../../_shared';

import styles from './CharacterCard.module.scss';

export type TCharacterStatus = 'alive' | 'dead' | 'unknown';

const STATUS_LABELS: Record<TCharacterStatus, string> = {
  alive: 'Alive',
  dead: 'Dead',
  unknown: 'Unknown'
};

export interface ICharacter {
  image: string;
  name: string;
  gender: string;
  species: string;
  location: string;
  status: TCharacterStatus;
}

const STATUS_OPTIONS = (Object.keys(STATUS_LABELS) as TCharacterStatus[]).map((value) => ({
  label: STATUS_LABELS[value],
  value,
  decorationSlot: <StatusDot status={value} />
})) satisfies { label: string; value: TCharacterStatus; decorationSlot: React.ReactNode }[];

type Props = {
  character: ICharacter;
  onSave: (next: ICharacter) => void;
};

export const CharacterCard = (props: Props) => {
  const { character, onSave } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState<ICharacter>(character);

  const startEditing = () => {
    setDraft(character);
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setDraft(character);
    setIsEditing(false);
  };

  const confirmEditing = () => {
    onSave(draft);
    setIsEditing(false);
  };

  const updateField = <K extends keyof ICharacter>(key: K, value: ICharacter[K]) => {
    setDraft((prev) => ({ ...prev, [key]: value }));
  };

  console.log(character);
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
              <Select<TCharacterStatus>
                size='small'
                value={draft.status}
                onChange={(value) => value && updateField('status', value)}
                options={STATUS_OPTIONS}
              />
            </div>
          ) : (
            <span className={classNames(styles.character_card_value, styles.character_card_value_status)}>
              {STATUS_LABELS[character.status]}
              <StatusDot status={character.status} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
