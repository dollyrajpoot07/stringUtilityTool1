'use client'

import React, { useState } from 'react';
import styles from './stringTool.module.css';

export default function StringTool() {
    const [input, setInput] = useState('');
    const [param1, setParam1] = useState('');
    const [param2, setParam2] = useState('');
    const [output, setOutput] = useState('');
    const [operation, setOperation] = useState('');

    const handleOperation = () => {
        let result = '';

        switch (operation) {
            case 'split':
                result = input.split(param1).join(' 🙂‍↔️ ');
                break;
            case 'trim':
                result = input.trim();
                break;
            case 'includes':
                result = input.includes(param1).toString();
                break;
            case 'toLowerCase':
                result = input.toLowerCase();
                break;
            case 'toUpperCase':
                result = input.toUpperCase();
                break;
            case 'startsWith':
                result = input.startsWith(param1).toString();
                break;
            case 'endsWith':
                result = input.endsWith(param1).toString();
                break;
            case 'slice':
                result = input.slice(Number(param1), Number(param2));
                break;
            case 'replace':
                result = input.replace(param1, param2);
                break;
            default:
                result = '';
        }

        setOutput(result);
    };

    return (
        <div className={styles.container}>
            <h2>🧵 String Utilities Tool – Part 1</h2>

            <textarea
                id='textarea'
                rows="4"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter a string to manipulate"
                className={styles.input}
            />

            <div className={styles.selectRow}>
                <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                    <option value="">-- Select Operation --</option>
                    <option value="split">split(separator)</option>
                    <option value="trim">trim()</option>
                    <option value="includes">includes(string)</option>
                    <option value="toLowerCase">toLowerCase()</option>
                    <option value="toUpperCase">toUpperCase()</option>
                    <option value="startsWith">startsWith(value)</option>
                    <option value="endsWith">endsWith(value)</option>
                    <option value="slice">slice(start, end)</option>
                    <option value="replace">replace(from, to)</option>
                </select>

                {(operation === 'split' ||
                    operation === 'includes' ||
                    operation === 'startsWith' ||
                    operation === 'endsWith' ||
                    operation === 'slice' ||
                    operation === 'replace') && (
                        <input
                            type="text"
                            value={param1}
                            onChange={(e) => setParam1(e.target.value)}
                            placeholder="Param 1"
                        />
                    )}

                {(operation === 'slice' || operation === 'replace') && (
                    <input
                        type="text"
                        value={param2}
                        onChange={(e) => setParam2(e.target.value)}
                        placeholder="Param 2"
                    />
                )}
            </div>

            <button className={styles.btn} onClick={handleOperation}>Run</button>

            <div className={styles.output}>
                <strong>Output:</strong>
                <p>{output}</p>
            </div>
        </div>
    );
}
