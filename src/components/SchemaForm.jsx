import { useState } from 'react';

function SchemaForm({ onSchemaChange }) {
  const [fields, setFields] = useState([]);

  const handleAddField = () => {
    setFields([
      ...fields,
      { name: '', type: 'string', required: false }
    ]);
  };

  const handleFieldChange = (index, fieldKey, value) => {
    const updatedFields = [...fields];
    updatedFields[index][fieldKey] = value;
    setFields(updatedFields);
    onSchemaChange(updatedFields); // Notify parent
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add Fields</h2>
      {fields.map((field, index) => (
        <div key={index} className="flex gap-4 mb-2">
          <input
            type="text"
            placeholder="Field name"
            className="border p-2 flex-1"
            value={field.name}
            onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
          />
          <select
            className="border p-2"
            value={field.type}
            onChange={(e) => handleFieldChange(index, 'type', e.target.value)}
          >
            <option value="string">string</option>
            <option value="number">number</option>
            <option value="boolean">boolean</option>
          </select>
          <label className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={field.required}
              onChange={(e) => handleFieldChange(index, 'required', e.target.checked)}
            />
            Required
          </label>
        </div>
      ))}
      <button
        onClick={handleAddField}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
      >
        Add Field
      </button>
    </div>
  );
}

export default SchemaForm;
