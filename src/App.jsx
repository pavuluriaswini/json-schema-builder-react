import { useState } from 'react';
import SchemaForm from './components/SchemaForm';
import './App.css';



function App() {
  const [schema, setSchema] = useState({});

  const generateSchema = (fields) => {
    const properties = {};
    const required = [];

    fields.forEach((field) => {
      if (field.name) {
        properties[field.name] = { type: field.type };
        if (field.required) {
          required.push(field.name);
        }
      }
    });

    const finalSchema = {
      type: 'object',
      properties,
    };

    if (required.length > 0) {
      finalSchema.required = required;
    }

    setSchema(finalSchema);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold text-center mb-6">JSON Schema Builder</h1>
      <SchemaForm onSchemaChange={generateSchema} />
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Generated JSON Schema:</h2>
        <pre className="bg-gray-800 text-green-300 p-4 rounded overflow-auto">
          {JSON.stringify(schema, null, 2)}
        </pre>
      </div>
    </div>
  );
}

export default App;

