# DeepSeek Integration Guide

## Overview

DeepSeek Coder is a specialized AI model designed for code understanding and generation tasks. It excels at:

- Code conversion between programming languages
- Understanding complex code logic and patterns
- Maintaining code functionality during translation
- Following language-specific best practices

## Setup

### 1. Get DeepSeek API Key

1. Visit [DeepSeek Platform](https://platform.deepseek.com/)
2. Sign up for an account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

### 2. Configure Environment Variables

Add your DeepSeek API key to your `.env.local` file:

\`\`\`env
DEEPSEEK_API_KEY="your-deepseek-api-key-here"
\`\`\`

### 3. Set as Default Model (Optional)

To use DeepSeek as the default model:

\`\`\`env
DEFAULT_AI_MODEL="deepseek"
\`\`\`

## Available Models

- `deepseek-coder`: Optimized for code-related tasks (recommended)
- `deepseek-chat`: General purpose conversational model

## Features

### Code Conversion Strengths

- **Multi-language Support**: Excellent support for popular programming languages
- **Context Awareness**: Understands code context and maintains functionality
- **Best Practices**: Applies language-specific idioms and patterns
- **Error Handling**: Preserves error handling logic during conversion

### Performance Characteristics

- **Speed**: Fast response times for code conversion
- **Accuracy**: High accuracy in maintaining code functionality
- **Cost**: Competitive pricing compared to other models
- **Rate Limits**: Generous rate limits for development use

## Usage Examples

The DeepSeek converter is automatically used when configured. No additional code changes are needed.

## Troubleshooting

### Common Issues

1. **API Key Invalid**: Ensure your API key is correct and active
2. **Rate Limits**: Check your usage limits on the DeepSeek platform
3. **Model Availability**: Verify the model name is correct

### Error Messages

- `DeepSeek API key is not configured`: Add DEEPSEEK_API_KEY to environment
- `DeepSeek API key is invalid or expired`: Check your API key status
- `DeepSeek API rate limit exceeded`: Wait or upgrade your plan

## Best Practices

1. **Model Selection**: Use `deepseek-coder` for code conversion tasks
2. **Temperature**: Keep temperature low (0.1) for consistent results
3. **Token Limits**: Monitor token usage for cost optimization
4. **Error Handling**: Implement proper fallback mechanisms

## Support

For DeepSeek-specific issues:
- [DeepSeek Documentation](https://platform.deepseek.com/docs)
- [DeepSeek Community](https://github.com/deepseek-ai)
\`\`\`

添加DeepSeek特定的测试用例：
