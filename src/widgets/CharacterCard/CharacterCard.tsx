import { useState } from 'react';

import { CheckIcon, CloseIcon, EditIcon } from '../../assets';
import { CharacterStatusDot, STATUS_LABELS, STATUS_OPTIONS, type ICharacter } from '../../entities';
import { classNames, Input, Select } from '../../shared';

import styles from './CharacterCard.module.scss';

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
                  className={classNames(
                    styles.character_card_action,
                    styles.character_card_action_cancel,
                    styles.character_card_action_close
                  )}
                  aria-label='Cancel'
                  onClick={cancelEditing}
                >
                  <CloseIcon
                    className={classNames(styles.character_card_action_icon, styles.character_card_action_close_icon)}
                  />
                </button>
                <button
                  type='button'
                  className={classNames(styles.character_card_action, styles.character_card_action_check)}
                  aria-label='Save'
                  onClick={confirmEditing}
                >
                  <CheckIcon
                    className={classNames(styles.character_card_action_icon, styles.character_card_action_check_icon)}
                  />
                </button>
              </>
            ) : (
              <button
                type='button'
                className={classNames(styles.character_card_action, styles.character_card_action_edit)}
                aria-label='Edit'
                onClick={startEditing}
              >
                <EditIcon
                  className={classNames(styles.character_card_action_icon, styles.character_card_action_edit_icon)}
                />
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

        <div className={classNames(styles.character_card_field, styles.character_card_field_location)}>
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
                className={styles.character_card_location_input}
              />
            </div>
          ) : (
            <span className={styles.character_card_value}>{character.location}</span>
          )}
        </div>

        <div
          className={classNames(styles.character_card_field, {
            [styles.character_card_field_status_editing]: isEditing
          })}
        >
          <span className={styles.character_card_label}>Status</span>
          {isEditing ? (
            <div className={styles.character_card_control}>
              <Select
                size='small'
                value={draft.status}
                onChange={(value) => value && updateField('status', value)}
                options={STATUS_OPTIONS}
                renderDecoration={(option) => <CharacterStatusDot status={option.value} />}
              />
            </div>
          ) : (
            <span className={classNames(styles.character_card_value, styles.character_card_value_status)}>
              {STATUS_LABELS[character.status]}
              <CharacterStatusDot status={character.status} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
